/* global localStorage */

import React from 'react'
import { useParams } from 'react-router-dom'
import { getDatabase } from 'firebase/database'

import { ChatApp } from '../app/chat'
import { useUser } from '../app/user'


export default function ChatPage() {
    const db = getDatabase()
    const roomId = localStorage.getItem('bantr__room')
    const user = useUser(db)
    const uid = user?.uid
    const { chatId } = useParams()

    return (
        <ChatApp {...{ roomId, chatId, uid, isViewOnly: false, }} />
    )
}