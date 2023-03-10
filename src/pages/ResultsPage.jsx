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

import { useUser, getChatId, getRoomCodeFromUrl } from '../app/user'

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

function formulaForLove(reactions, from) {
    const {
        positives,
        negatives,
        total,
    } = reactions.filter(r => r.from === from).reduce((agg, val) => {
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

export default function ResultsPage() {
    const db = getDatabase()

    const roomId = getRoomCodeFromUrl()

    const user = useUser(db)
    const uid = user?.uid

    const [userMap, setUserMap] = useState({})
    
    useEffect(() => {
        const userMapRef = query(query(ref(db, 'user'), orderByChild('room')), equalTo(roomId))
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
        const reactionMapRef = ref(db, 'reaction')
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
            const loveFactor = formulaForLove(chatReactions, currentUser.uid)
            return {
                ...otherUser,
                loveFactor,
            }
        }).sort((a, b) => b.loveFactor - a.loveFactor)
        return {
            ...currentUser,
            matches,
        }
    })

    function UserResult(props) {
        const { matches } = props
        const [loveIndex, setLoveIndex] = useState(0)

        function decrementIndex() {
            setLoveIndex((prev) => (prev === 0 ? matches.length - 1 : prev - 1))
        }

        function incrementIndex() {
            setLoveIndex((prev) => ((prev + 1) % matches.length))
        }

        const matchUser = matches?.[loveIndex] || {}

        return (
            <div>
                <br />
                <h3>{props.realName}</h3>
                <p>{props.name} ({props.character})</p>
                <h4>Perfect Match #{loveIndex + 1}</h4>
                <p>{matchUser.realName} ({matchUser.character})</p>
                <p>Love Factor: {matchUser?.loveFactor}</p>
                <button onClick={incrementIndex}>Next</button>
            </div>
        )
    }

    const userResults = usersWithLove.map((u) => (
        <UserResult {...u} />
    ))

    return (
        <div>
            <div className="Section">
                <h2 className="Center">Results</h2>
                {userResults}
                <br />
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}