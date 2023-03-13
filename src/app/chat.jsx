/* localStorage */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    getDatabase,
    onChildAdded,
    onValue,
    push,
    ref,
    remove,
    set,
    serverTimestamp,
} from 'firebase/database'

import { useUser } from './user'

export const REACTIONS = {
    green_heart: '💚',
    soccer_ball: '⚽',
    red_flag: '🚩',
}

export function getChatId(a, b) {
    return a < b ? `${a}~${b}` : `${b}~${a}`
}

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

function MessageTile({ myUid, from, sendReaction, content, reactions, isViewOnly }) {
    const maybeReactions = (myUid !== from || isViewOnly) && (
        <Reactions reactions={reactions} />
    )
    const maybeReactionBar = (myUid !== from && !isViewOnly) && (
        <ReactionBar reactions={reactions} sendReaction={sendReaction} />
    )
    const authorClass = myUid === from ? 'MyMessage' : 'TheirMessage'
    return (
        <div className="MessageTile">
            <div className={`MessageBox ${authorClass}`}>
                <ContentElement content={content} />
            </div>
            <div className="MessageArrow"></div>
            {maybeReactions}
            {maybeReactionBar}
        </div>
    )
}

function getOtherUid(chatId, myUid) {
    const [a, b] = chatId.split('~')
    return a === myUid ? b : a
}

export function useInboxData(db, roomId, myUid) {
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
    })) || []

    const [liveMap, setLiveMap] = useState({})

    useEffect(() => {
        const liveRef = ref(db, `live/${roomId}/${myUid}`)
        onValue(liveRef, async (snap) => {
            const liveRefVal = snap.val() || {}
            setLiveMap(liveRefVal)
        })
    }, [roomId, myUid])

    return { allUsers, liveMap }
}

const TYPING_EVENT_THROTTLE_MS = 3000
const CHECK_NOT_TYPING_INTERAL_MS = 1000

let lastEventTimestamp = 0
let lastSentTimestamp = 0

function getSetIsTyping({ db, isViewOnly, roomId, otherUid, uid }) {

    const setIsTyping = async (isTyping) => {
        if (isViewOnly) {
            return
        }
        // Throttle is typing event if it was sent recently
        const currentEventTimestamp = Date.now()
        const nextEventMinTimestamp = lastSentTimestamp + TYPING_EVENT_THROTTLE_MS
        lastEventTimestamp = currentEventTimestamp
        // Do not throttle a blur event that ends typing
        if (isTyping && currentEventTimestamp <= nextEventMinTimestamp) {
            // Still typing
            return
        }
        // Started typing
        const typingRef = ref(db, `live/${roomId}/${otherUid}/${uid}/typing`)
        lastSentTimestamp = currentEventTimestamp
        await set(typingRef, isTyping)
        if (!isTyping) {
            return
        }
        // If blur event never comes, check on interval for end of typing
        // Debounce to avoid ending typing too early
        const interval = setInterval(async () => {
            const now = Date.now()
            const stoppedTypingMinTimestamp = lastEventTimestamp + TYPING_EVENT_THROTTLE_MS
            if (now <= stoppedTypingMinTimestamp) {
                // Still typing
                return
            }
            // Stopped typing
            await set(typingRef, false)
            clearInterval(interval)
        }, CHECK_NOT_TYPING_INTERAL_MS)
    }

    return setIsTyping
}

export function ChatApp(props) {
    const { roomId, chatId, uid, isViewOnly } = props
    const savedChatKey = `bantr__chat__${chatId}`
    
    const db = getDatabase()

    const [user, setUser] = useState({})
    
    useEffect(() => {
        const userRef = ref(db, `user/${roomId}/${uid}`)
        onValue(userRef, async (snap) => {
            const userVal = snap.val() || {}
            setUser(userVal)
        })
    }, [uid])

    const otherUid = getOtherUid(chatId, uid)
    
    const [chatUser, setChatUser] = useState({})
    const theirName = chatUser?.name || 'someone'
    
    useEffect(() => {
        const chatUserRef = ref(db, `user/${roomId}/${otherUid}`)
        onValue(chatUserRef, async (snap) => {
            const chatUserVal = snap.val() || {}
            setChatUser(chatUserVal)
        })
    }, [otherUid])
    
    const [chatMap, setChatMap] = useState({})
    const chatRef = ref(db, `chat/${roomId}/${chatId}`)

    useEffect(() => {
        onChildAdded(chatRef, async (snap) => {
            const chatVal = snap.val() || {}
            setChatMap((prev) => ({
                ...prev,
                [snap.key]: chatVal,
            }))
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

    const savedContent = localStorage.getItem(savedChatKey) || ''
    const [contentText, setContentText] = useState(savedContent)

    const doUpdateContent = async (e) => {
        const content = e.target.value
        localStorage.setItem(savedChatKey, content)
        setContentText(content)
    }

    const doSendChat = async () => {
        if (!contentText || isViewOnly) {
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
        localStorage.setItem(savedChatKey, '')
        setContentText('')
        const latestMyRef = ref(db, `live/${roomId}/${otherUid}/${uid}/latest`)
        await set(latestMyRef, message)
        const latestTheirRef = ref(db, `live/${roomId}/${uid}/${otherUid}/latest`)
        await set(latestTheirRef, message)
    }

    const doSendReaction = async (fromUid, toUid, chatId, messageId, reactionId, shouldSet) => {
        if (isViewOnly) {
          return
        }
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

    const setIsTyping = getSetIsTyping({ db, isViewOnly, roomId, otherUid, uid })

    const [isOtherTyping, setIsOtherTyping] = useState(false)

    useEffect(() => {
        if (isViewOnly) {
            return
        }
        const incomingRef = ref(db, `live/${roomId}/${uid}`)
        onValue(incomingRef, async (snap) => {
            const incomingVal = snap.val() || {}
            const isOtherTypingLive = incomingVal?.[otherUid]?.typing
            setIsOtherTyping(isOtherTypingLive)
        })
    }, [roomId, uid, otherUid])

    const viewClass = isViewOnly ? 'ViewOnly' : 'LiveChat'
    const backLinkPath = isViewOnly ? `/results?room=${roomId}` : '/chat'

    const isTypingEl = (
        <div key="typing" className="MessageTile TypingMessage">
            <div className="MessageBox TheirMessage">
                <p>
                    <span className="TypingDot">.</span>
                    <span className="TypingDot">.</span>
                    <span className="TypingDot">.</span>
                </p>
            </div>
            <div className="MessageArrow"></div>
        </div>
    )

    const messageTiles = chatMessages.map((message) => (
        <MessageTile
            key={message.id}
            myUid={uid}
            sendReaction={sendReaction(message.id)}
            isViewOnly={isViewOnly}
            {...message}
        />
    ))
    const allMessageTiles = (
        (isViewOnly || !isOtherTyping)
            ? messageTiles
            : [...messageTiles, isTypingEl]
    )
    const noMessages = (
        <p className="Starter">No messages yet. It's time to banter.</p>
    )
    const messageEls = allMessageTiles.length > 0 ? allMessageTiles : noMessages

    const senderEl = (
        <div className="Sender">
            <textarea
                className="SendContent"
                onChange={doUpdateContent}
                onKeyDown={() => setIsTyping(true)}
                onBlur={() => setIsTyping(false)}
                value={contentText}
            />
            <button
                className="SendButton"
                onClick={doSendChat}
            >
                <span>Send</span>
            </button>
        </div>
    )

    return (
        <div>
            <h2 className="PageTitle TheirUserName">{theirName}</h2>
            <Link to={backLinkPath} className="BackLink">{'< Back'}</Link>
            <div className={`Chat ${viewClass}`}>
                <div className="ChatWrapper">
                    <div>{messageEls}</div>
                </div>
            </div>
            {!isViewOnly && senderEl}
        </div>
    )
}