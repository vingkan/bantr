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

import { getChatId, useInboxData } from '../app/chat'
import { useUser } from '../app/user'

const MS_TO_MINS = 1000 * 60

function LiveContent({ live, myUid }) {
    if (!live?.latest) {
        return <p>Chat</p>
    }
    const latest = live.latest
    const author = latest?.from === myUid ? 'You' : 'Them'
    const content = latest?.content
    const latestMessage = `${author}: ${content}`
    return <p>{latestMessage}</p>
}

function TimeSince({ live }) {
    if (!live?.latest) {
        return <p>New Match</p>
    }
    const latest = live.latest
    const deltaMins = (Date.now() - latest?.timestamp) / MS_TO_MINS
    const mins = Math.max(Math.floor(deltaMins), 0)
    const minsMessage = mins >= 60 ? `too long ago` : `${mins}m ago`
    return <p>{minsMessage}</p>
}

function MatchTile({ myUid, user, live }) {
    const chatId = getChatId(myUid, user?.uid)
    const distance = Math.floor(Math.random() * 8) + 1
    const turnClass = (live?.latest?.from === myUid) ? 'ThemNext' : 'YouNext'
    return (
        <Link className={`MatchTile ${turnClass}`} to={`/chat/${chatId}`}>
            <div className="Teaser">
                <h3>{user?.name || 'No Name Yet'}</h3>
                <TimeSince live={live} />
            </div>
            <div className="ChatIcon">
                <LiveContent {...{live, myUid}} />
            </div>
        </Link>
    )
}

export default function MatchPage() {
    const db = getDatabase()

    const roomId = localStorage.getItem('bantr__room')

    const user = useUser(db, roomId)
    const uid = user?.uid

    const { allUsers, liveMap } = useInboxData(db, roomId, uid)

    const matchTiles = allUsers.filter(user => user.uid !== uid).map((user) => (
        <MatchTile
            key={user.uid}
            myUid={uid}
            user={user}
            live={liveMap?.[user?.uid] || {}}
        />
    ))
    const noMatches = <p className="Center">No one is nearby.</p>
    const matchResults = matchTiles.length > 0 ? matchTiles : noMatches

    return (
        <div>
            <h2 className="PageTitle">suggestions for you</h2>
            <div className="MatchResults">{matchResults}</div>
            <p className="BottomLinks">
              <Link to="/">{'< Change Room/Name'}</Link>
              <Link to="/chat">{'Chats >'}</Link>
            </p>
        </div>
    )
}