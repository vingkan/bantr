/* global localStorage */
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

import { getChatId, useInboxData } from '../app/chat'
import { useUser } from '../app/user'

function InboxChat(props) {
    const author = props.live.latest?.from === props.myUid ? 'You' : 'Them'
    const content = props.live.latest?.content
    const preview = content ? `${author}: ${content}` : 'start a conversation'
    const chatId = getChatId(props.myUid, props.uid)
    const chatLink = `/chat/${chatId}`
    return (
        <Link to={chatLink}>
            <div className="InboxChat">
                <div className="Half UserHalf">
                    <h4>{props?.name}</h4>
                </div>
                <div className="Half MessageHalf">
                    <p>{preview}</p>
                </div>
                <div className={`ChatLight ${author}`}></div>
            </div>
        </Link>
    )
}

function getChatEls(chats) {
    const chatEls = chats.map((props) => (
        <InboxChat key={props.uid} {...props} />)
    )
    return chatEls
}

export default function ChatInboxPage() {
    const db = getDatabase()
    const roomId = localStorage.getItem('bantr__room')
    const user = useUser(db, roomId)
    const myUid = user?.uid

    const { allUsers, liveMap } = useInboxData(db, roomId, myUid)

    const allChats = allUsers.filter((u) => (
        u.uid !== myUid
    )).map((u) => ({
        ...u,
        myUid,
        live: liveMap?.[u?.uid] || { typing: false, latest: {} },
    })).sort((a, b) => {
        const aTimestamp = a.live.latest?.timestamp || 0
        const bTimestamp = b.live.latest?.timestamp || 0
        return bTimestamp - aTimestamp
    })

    const chatsYouNext = allChats.filter((c) => (
        c.live.latest?.from && c.live.latest?.from !== myUid
    ))
    const chatsThemNext = allChats.filter((c) => (
        c.live.latest?.from && c.live.latest?.from === myUid
    ))
    const chatsNotStarted = allChats.filter((c) => !c.live.latest?.from)
    const orderedChats = [...chatsYouNext, ...chatsThemNext, ...chatsNotStarted]

    return (
        <div>
            <h2 className="PageTitle">you've been bantred</h2>
            <Link to="/match" className="BackLink">{'< Back'}</Link>
            <div className="Inbox">
                <h3>your messages</h3>
                {getChatEls(orderedChats)}
            </div>
        </div>
    )
}