/* global localStorage */

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    equalTo,
    getDatabase,
    onValue,
    orderByChild,
    query,
    ref,
} from 'firebase/database'

import { getChatId } from '../app/chat'
import { useUser } from '../app/user'

function MatchTile({ myUid, user }) {
    const chatId = getChatId(myUid, user?.uid)
    const distance = Math.floor(Math.random() * 8) + 1
    return (
        <Link className="MatchTile" to={`/chat/${chatId}`}>
            <div className="Teaser">
                <h3>{user?.name || 'No Name Yet'}</h3>
                <p>{distance} km away</p>
            </div>
            <div className="ChatIcon">Chat</div>
        </Link>
    )
}

export default function MatchPage() {
    const db = getDatabase()

    const roomId = localStorage.getItem('bantr__room')

    const user = useUser(db, roomId)
    const uid = user?.uid

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

    // useEffect(() => {
    //   const messagesRef = ref(`chat`)
    // })

    const matchTiles = allUsers.filter(user => user.uid !== uid).map((user) => (
        <MatchTile key={user.uid} myUid={uid} user={user} />
    ))
    const noMatches = <p className="Center">No one is nearby.</p>
    const matchResults = matchTiles.length > 0 ? matchTiles : noMatches

    return (
        <div>
            <h2 className="PageTitle">suggestions for you</h2>
            <div className="MatchResults">{matchResults}</div>
            <p className="ChangeProfileLink">
              <Link to="/">{'< Change Room or Name'}</Link>
            </p>
        </div>
    )
}