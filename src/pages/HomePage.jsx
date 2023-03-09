import React, { useEffect } from 'react'
import {
    getDatabase,
    onValue,
    ref,
} from 'firebase/database'

import { signInUser, useCurrentAuthUser } from '../app/authentication'

export default function HomePage() {
    const user = useCurrentAuthUser()
    const uid = user?.uid
    const userMessage = uid ? `Logged in as ${uid}.` : 'Not logged in.'

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
            <div>
                <h1>Bantr</h1>
                <p>A fun Ted Lasso-style game.</p>
                <button onClick={signInUser}>Play</button>
                <pre>{userMessage}</pre>
            </div>
        </div>
    )
}