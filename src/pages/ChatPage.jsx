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

import { REACTIONS } from '../app/chat'
import { useUser } from '../app/user'

function ReactionButton({ reactionId, sendReaction, isSet }) {
    const emoji = REACTIONS?.[reactionId]
    const addReaction = () => sendReaction(reactionId, !isSet)
    const statusClass = isSet ? 'On' : 'Off'
    return (
        <div className={`Reaction ${statusClass}`} onClick={addReaction}>
            <span>{emoji}</span>
        </div>
    )
}

function ReactionBar({ reactions, sendReaction }) {
    const hasReactions = Object.keys(reactions).length > 0
    const displayClass = hasReactions ? 'HasReactions' : 'NoReactions'
    const buttons = Object.keys(REACTIONS).map((reactionId) => (
        <ReactionButton
            key={reactionId}
            reactionId={reactionId}
            sendReaction={sendReaction}
            isSet={reactions?.[reactionId]}
        />
    ))
    return (
        <div className={`ReactionBar ${displayClass}`}>
            {buttons}
        </div>
    )
}

function Reactions({ reactions }) {
    return (
        <div className="Reactions">{Object.keys(reactions).map((reactionId) => (
            <div
                className="Reaction"
                key={reactionId}
            >{REACTIONS?.[reactionId]}</div>
        ))}</div>
    )
}

function ContentElement({ content }) {
    const lines = content.split('\n')
    const els = lines.map((line, i) => (
        <p key={i}>{line}</p>
    ))
    return (
        <div>{els}</div>
    )
}

function MessageTile({ myUid, from, sendReaction, content, reactions }) {
    const maybeReactions = myUid !== from && (
        <Reactions reactions={reactions} />
    )
    const maybeReactionBar = myUid !== from && (
        <ReactionBar reactions={reactions} sendReaction={sendReaction} />
    )
    const authorClass = myUid === from ? 'MyMessage' : 'TheirMessage'
    return (
        <div className="MessageTile">
            <div className={`MessageBox ${authorClass}`}>
                <ContentElement content={content} />
            </div>
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

    const user = useUser(db)
    const uid = user?.uid

    const { chatId } = useParams()
    const otherUid = getOtherUid(chatId, uid)
    
    const [chatUser, setChatUser] = useState({})
    const theirName = chatUser?.name || 'someone'
    
    useEffect(() => {
        const chatUserRef = ref(db, `user/${otherUid}`)
        onValue(chatUserRef, async (snap) => {
            const chatUserVal = snap.val() || {}
            setChatUser(chatUserVal)
        })
    }, [otherUid])
    
    const [chatMap, setChatMap] = useState({})
    const chatRef = ref(db, `chat/${roomId}/${chatId}`)

    useEffect(() => {
        onValue(chatRef, async (snap) => {
            const chatVal = snap.val() || {}
            setChatMap(chatVal)
        })
    }, [])

    const [reactionMap, setReactionMap] = useState({})
    
    useEffect(() => {
        const reactionMapRef = ref(db, `reaction/${roomId}/${chatId}`)
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
        const reactionRef = ref(db, `reaction/${roomId}/${chatId}/${messageId}/${reactionId}`)
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
    const noMessages = (
        <p className="Starter">No messages yet. It's time to banter.</p>
    )
    const messageEls = messageTiles.length > 0 ? messageTiles : noMessages

    return (
        <div>
            <h2 className="PageTitle TheirUserName">{theirName}</h2>
            <Link to="/match" className="BackLink">{'< Back'}</Link>
            <div className="Chat">
                <div>{messageEls}</div>
            </div>
            <div className="Sender">
                <textarea
                    className="SendContent"
                    onChange={doUpdateContent}
                    value={contentText}
                />
                <button
                    className="SendButton"
                    onClick={doSendChat}
                >
                    <span>Send</span>
                </button>
            </div>
        </div>
    )
}