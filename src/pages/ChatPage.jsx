/* global localStorage */

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    getDatabase,
    onValue,
    push,
    ref,
    remove,
    set,
    serverTimestamp,
} from 'firebase/database'

import { useCurrentAuthUser } from '../app/authentication'

const REACTIONS = {
    red_flag: '🚩',
    green_heart: '💚',
    soccer_ball: '⚽',
}

function ReactionButton({ reactionId, sendReaction }) {
    const emoji = REACTIONS?.[reactionId]
    const addReaction = () => sendReaction(reactionId, true)
    return (
        <div className="ReactionButton">
            <button onClick={addReaction}>{emoji}</button>
        </div>
    )
}

function ReactionBar({ sendReaction }) {
    const buttons = Object.keys(REACTIONS).map((reactionId) => (
        <ReactionButton key={reactionId} {...{reactionId, sendReaction}} />
    ))
    return (
        <div className="ReactionBar">
            {buttons}
        </div>
    )
}

function Reactions({ reactions, sendReaction }) {
    return (
        <div>{Object.keys(reactions).map((reactionId) => (
            <div
                key={reactionId}
                onClick={(e) => sendReaction(reactionId, false)}
            >{REACTIONS?.[reactionId]}</div>
        ))}</div>
    )
}

function MessageTile({ myUid, from, sendReaction, content, reactions }) {
    const maybeReactions = myUid !== from && (
        <Reactions reactions={reactions} sendReaction={sendReaction} />
    )
    const maybeReactionBar = myUid !== from && (
        <ReactionBar sendReaction={sendReaction} />
    )
    return (
        <div className="MessageTile">
            <div>{content}</div>
            {maybeReactions}
            {maybeReactionBar}
        </div>
    )
}

function getOtherUid(chatId, myUid) {
    const [a, b] = chatId.split('~')
    return a === myUid ? b : a
}

export default function ChatPage() {
    const db = getDatabase()

    const roomId = localStorage.getItem('bantr__room')

    const user = useCurrentAuthUser()
    const uid = user?.uid

    const { chatId } = useParams()
    const otherUid = getOtherUid(chatId, uid)
    
    const [chatUser, setChatUser] = useState({})
    
    useEffect(() => {
        const chatUserRef = ref(db, `user/${otherUid}`)
        onValue(chatUserRef, async (snap) => {
            const chatUserVal = snap.val() || {}
            setChatUser(chatUserVal)
        })
    }, [])
    
    const [chatMap, setChatMap] = useState({})
    const chatRef = ref(db, `chat/${chatId}`)

    useEffect(() => {
        onValue(chatRef, async (snap) => {
            const chatVal = snap.val() || {}
            setChatMap(chatVal)
        })
    }, [])

    const [reactionMap, setReactionMap] = useState({})
    
    useEffect(() => {
        const reactionMapRef = ref(db, `reaction/${chatId}`)
        onValue(reactionMapRef, async (snap) => {
            const reactionMapVal = snap.val() || {}
            setReactionMap(reactionMapVal)
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
            room: roomId,
            content: contentText,
        }
        await push(chatRef, message)
        setContentText('')
    }

    const doSendReaction = async (fromUid, toUid, chatId, messageId, reactionId, shouldSet) => {
        const reactionRef = ref(db, `reaction/${chatId}/${messageId}/${reactionId}`)
        if (shouldSet) {
            await set(reactionRef, {
                timestamp: serverTimestamp(),
                from: fromUid,
                to: toUid,
                room: roomId,
            })
        } else {
            await remove(reactionRef)
        }
    }

    const chatMessages = Object.keys(chatMap).map((chatEventId) => ({
        id: chatEventId,
        ...(chatMap[chatEventId]),
        reactions: reactionMap?.[chatEventId] || {},
    })).sort((a, b) => a.timestamp - b.timestamp)

    const sendReaction = (messageId) => ((reactionId, shouldSet) => {
        doSendReaction(uid, otherUid, chatId, messageId, reactionId, shouldSet)
    })

    const messageTiles = chatMessages.map((message) => (
        <MessageTile
            key={message.id}
            myUid={uid}
            sendReaction={sendReaction(message.id)}
            {...message}
        />
    ))

    return (
        <div>
            <div>
                <h1>Chat</h1>
                <Link to="/match">Matches</Link>
                <p>Chatting with {chatUser?.name || 'someone'}.</p>
                <div>{messageTiles}</div>
                <textarea onChange={doUpdateContent} value={contentText}></textarea>
                <button onClick={doSendChat}>Send</button>
            </div>
        </div>
    )
}