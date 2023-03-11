import React, { useEffect } from 'react'
import {
    getDatabase,
    onValue,
    ref,
} from 'firebase/database'

import { useCurrentAuthUser } from '../app/authentication'

export default function ChatInboxPage() {
    const user = useCurrentAuthUser()
    const uid = user?.uid

    const db = getDatabase()
    const helloRef = ref(db, 'hello')

    useEffect(() => {
        onValue(helloRef, async (snap) => {
            const val = snap.val()
            console.log({val})
        })
    }, [])

    return (
        <div>
            <h2>Chat Inbox</h2>
            <p>Chats will appear here.</p>
        </div>
    )
}