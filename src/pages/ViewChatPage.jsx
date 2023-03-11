/* global localStorage */

import React from 'react'
import { useParams } from 'react-router-dom'

import { ChatApp, getChatId } from '../app/chat'
import { useUser, getRoomCodeFromUrl } from '../app/user'


export default function ViewChatPage() {
    const roomId = getRoomCodeFromUrl()
    const { myUid, theirUid } = useParams()
    const chatId = getChatId(myUid, theirUid)

    return (
        <ChatApp {...{ roomId, chatId, uid: myUid, isViewOnly: true, }} />
    )
}