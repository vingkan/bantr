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

import { useCurrentAuthUser } from '../app/authentication'

function getChatId(a, b) {
    return a < b ? `${a}~${b}` : `${b}~${a}`
}

function MatchTile({ myUid, user }) {
    const chatId = getChatId(myUid, user?.uid)
    return (
        <div>
            <h2>{user?.name || 'No Name Yet'}</h2>
            <p>7 km away</p>
            <Link to={`/chat/${chatId}`}>Chat</Link>
        </div>
    )
}

export default function MatchPage() {
    const db = getDatabase()

    const roomId = localStorage.getItem('bantr__room')

    const user = useCurrentAuthUser()
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

    const matchTiles = allUsers.filter(user => user.uid !== uid).map((user) => (
        <MatchTile key={user.uid} myUid={uid} user={user} />
    ))
    const noMatches = <p>No one is nearby.</p>
    const matchResults = matchTiles.length > 0 ? matchTiles : noMatches

    return (
        <div>
            <div>
                <h1>Match</h1>
                <Link to="/">Home</Link>
                <div>{matchResults}</div>
            </div>
        </div>
    )
}