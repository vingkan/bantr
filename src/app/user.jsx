import React, { useEffect, useState } from 'react'
import {
    getDatabase,
    onValue,
    ref,
} from 'firebase/database'

import { useCurrentAuthUser } from './authentication'

export function useUser(db, roomId) {
    const authUser = useCurrentAuthUser()
    const uid = authUser?.uid
    
    const [user, setUser] = useState({})

    useEffect(() => {
        const userRef = ref(db, `user/${roomId}/${uid}`)
        onValue(userRef, async (snap) => {
            const userVal = snap.val()
            setUser(userVal)
        })
    }, [uid, roomId])

    return { uid, ...user }    
}

export function getRoomCodeFromUrl() {
    const query = document.location.search
    const codeFromQuery = query?.split('room=')?.[1]?.split('&')?.[0]
    if (!codeFromQuery) {
        return null
    }
    const cleanRoomCode = codeFromQuery.replace(/[^0-9]/gi, '').substring(0, 8)
    return cleanRoomCode
}