import React, { useEffect, useState } from 'react'
import {
    getDatabase,
    onValue,
    ref,
} from 'firebase/database'

import { useCurrentAuthUser } from './authentication'

export function useUser(db) {
    const authUser = useCurrentAuthUser()
    const uid = authUser?.uid
    
    const [user, setUser] = useState({})

    useEffect(() => {
        const userRef = ref(db, `user/${uid}`)
        onValue(userRef, async (snap) => {
            const userVal = snap.val()
            setUser(userVal)
        })
    }, [uid])

    return { uid, ...user }    
}