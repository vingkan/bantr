import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    equalTo,
    getDatabase,
    onValue,
    orderByChild,
    query,
    ref,
} from 'firebase/database'

import { CHARACTERS } from '../app/characters'
import { REACTIONS, getChatId } from '../app/chat'
import { getRoomCodeFromUrl } from '../app/user'

function flattenReactionMap(reactionMapVal, roomId) {
    return Object.values(reactionMapVal).reduce((messageAgg, messageVal) => {
        return [...messageAgg, ...(Object.values(messageVal))]
    }, []).reduce((reactionAgg, reactionMap) => {
        const values = Object.keys(reactionMap).map((key) => ({
            reaction: key,
            ...(reactionMap[key]),
        })).filter((r) => r.room === roomId)
        return [...reactionAgg, ...values]
    }, [])
}

function countReactions(reactions) {
    return reactions.reduce((agg, val) => ({
        ...agg,
        [val.reaction]: (agg?.[val.reaction] || 0) + 1,
    }), {})
}

function formulaForLove(reactions) {
    const {
        positives,
        negatives,
        total,
    } = reactions.reduce((agg, val) => {
        return { 
            positives: agg.positives + (val.reaction !== 'red_flag' ? 1 : 0),
            negatives: agg.negatives + (val.reaction === 'red_flag' ? 1 : 0),
            total: agg.total + 1,
        }
    }, {
        positives: 0,
        negatives: 0,
        total: 0,
    })
    return positives - negatives
}

function ReactionCount(props) {
    return (
        <span className="ReactionCount">
            <span>{props.emoji}</span>
            <span>{props?.count || 0}</span> 
        </span>
    )  
}

function ReactionCounts(props) {
    const reactionCountMap = props.reactions || {}
    const countEls = Object.keys(REACTIONS).map((r) => ({
        reaction: r,
        emoji: REACTIONS?.[r],
        count: props.reactions?.[r],
    })).map((r) => (
        <ReactionCount key={r.reaction} {...r} />
    ))
    return (
        <p className="ReactionCounts">{countEls}</p>
    )
}

function UserResult(props) {
    const { roomId, matches } = props
    const [loveIndex, setLoveIndex] = useState(0)

    function decrementIndex() {
        setLoveIndex((prev) => (prev === 0 ? matches.length - 1 : prev - 1))
    }

    function incrementIndex() {
        setLoveIndex((prev) => ((prev + 1) % matches.length))
    }

    const matchUser = matches?.[loveIndex] || {}

    const noCharacter = { name: 'No Character' }
    const userCharacter = CHARACTERS?.[props.character] || noCharacter
    const matchCharacter = CHARACTERS?.[matchUser.character] || noCharacter
    const userImageUrl = `/bantr/image/${props.character}.jpeg`
    const matchImageUrl = `/bantr/image/${matchUser.character}.jpeg`
    const viewPath = `/chat/view/${props.uid}/${matchUser.uid}?room=${roomId}`

    return (
        <div className="UserResultWrapper">
            <div className="UserResult">
                <div className="ResultBlock UserBlock">
                    <h3>{props.realName}</h3>
                    <h4>{props.name}</h4>
                    <h5>{userCharacter.name}</h5>
                    <ReactionCounts reactions={matchUser.theirCounts} />
                    <p>Reactions Received</p>
                </div>
                <div className="ResultBlock MatchBlock">
                    <h3>{props.realName}'s #{loveIndex + 1} Match</h3>
                    <p>Love Factor: {matchUser?.loveFactor}</p>
                    <button onClick={decrementIndex}>{'<'}</button>
                    <div className="MatchPhotoPair">
                        
                        <div className="MatchPhoto">
                            <img src={userImageUrl} alt={userCharacter.name} />
                        </div>
                        <div className="MatchPhoto">
                            <img src={matchImageUrl} alt={matchCharacter.name} />
                        </div>
                        
                    </div>
                    <button onClick={incrementIndex}>{'>'}</button>
                    <p>
                      <Link to={viewPath}>View Chat</Link>
                    </p>
                </div>
                <div className="ResultBlock UserBlock">
                    <h3>{matchUser.realName}</h3>
                    <h4>{matchUser.name}</h4>
                    <h5>{matchCharacter.name}</h5>
                    <ReactionCounts reactions={matchUser.myCounts} />
                    <p>Reactions Received</p>
                </div>
            </div>
        </div>
    )
}

export default function ResultsPage() {
    const db = getDatabase()

    const roomId = getRoomCodeFromUrl()

    const [userMap, setUserMap] = useState({})
    
    useEffect(() => {
        const userMapRef = ref(db, `user/${roomId}`)
        onValue(userMapRef, async (snap) => {
            const userMapVal = snap.val() || {}
            setUserMap(userMapVal)
        })
    }, [])

    const allUsers = Object.keys(userMap).map((uid) => ({
        uid,
        ...(userMap[uid]),
    }))

    const [reactionMap, setReactionMap] = useState({})

    useEffect(() => {
        const reactionMapRef = ref(db, `reaction/${roomId}`)
        onValue(reactionMapRef, async (snap) => {
            const reactionMapVal = snap.val() || {}
            setReactionMap(reactionMapVal)
        })
    }, [])

    const usersWithLove = allUsers.map((currentUser) => {
        const matches = allUsers.map((otherUser) => {
            const chatId = getChatId(currentUser.uid, otherUser.uid)
            const subMap = reactionMap?.[chatId] || {}
            const keyMap = {[chatId]: subMap}
            const chatReactions = flattenReactionMap(keyMap, roomId)
            const myReactions = chatReactions.filter(r => r.from === currentUser.uid)
            const theirReactions = chatReactions.filter(r => r.from === otherUser.uid)
            const loveFactor = formulaForLove(myReactions)
            return {
                ...otherUser,
                loveFactor,
                myCounts: countReactions(myReactions),
                theirCounts: countReactions(theirReactions),
                totalReactions: chatReactions.length,
            }
        }).sort(
            (a, b) => (
                a.loveFactor !== b.loveFactor
                    ? b.loveFactor - a.loveFactor
                    : b.totalReactions - a.totalReactions
            )
        ).filter(
            (u) => u.uid !== currentUser.uid
        )
        return {
            ...currentUser,
            matches,
        }
    })

    const noResults = <p>No results yet.</p>
    const userResults = usersWithLove.map((u) => (
        <UserResult key={u.uid} roomId={roomId} {...u} />
    ))

    return (
        <div>
            <div className="Section Center">
                <h2>Results</h2>
                <p className="ScrollMessage">Scroll horizontally to see each match.</p>
                <div className="AllUserResults">
                    {userResults.length > 0 ? userResults : noResults }
                </div>
                <br />
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}