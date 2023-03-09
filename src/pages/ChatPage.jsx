import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    getDatabase,
    onValue,
    push,
    ref,
    serverTimestamp,
} from 'firebase/database'

import { useCurrentAuthUser } from '../app/authentication'

function MessageTile({ content }) {
    return (
        <div>{content}</div>
    )
}

export default function ChatPage() {
    const db = getDatabase()

    const user = useCurrentAuthUser()
    const uid = user?.uid

    const { chatId } = useParams()
    
    // const [chatUser, setChatUser] = useState({})
    
    // useEffect(() => {
    //     onValue(chatUserRef, async (snap) => {
    //         const chatUserVal = snap.val() || {}
    //         setChatUser(chatUserVal)
    //     })
    // }, [])
    
    const [chatMap, setChatMap] = useState({})
    const chatRef = ref(db, `chat/${chatId}`)

    useEffect(() => {
        onValue(chatRef, async (snap) => {
            const chatVal = snap.val() || {}
            setChatMap(chatVal)
        })
    }, [])

    const [contentText, setContentText] = useState()

    const doUpdateContent = async (e) => {
        const content = e.target.value
        setContentText(content)
    }

    const doSendChat = async () => {
        if (!contentText) {
            return
        }
        const message = {
            type: 'message',
            timestamp: serverTimestamp(),
            from: uid,
            content: contentText,
        }
        await push(chatRef, message)
        setContentText('')
    }

    const chatMessages = Object.keys(chatMap).map((chatEventId) => ({
        id: chatEventId,
        ...(chatMap[chatEventId]),
    })).sort((a, b) => a.timestamp - b.timestamp)

    const messageTiles = chatMessages.map((message) => (
        <MessageTile {...message} />
    ))

    return (
        <div>
            <div>
                <h1>Chat</h1>
                <Link to="/match">Matches</Link>
                <p>Chatting with someone.</p>
                <div>{messageTiles}</div>
                <textarea onChange={doUpdateContent} value={contentText}></textarea>
                <button onClick={doSendChat}>Send</button>
            </div>
        </div>
    )
}