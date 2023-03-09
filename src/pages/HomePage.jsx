import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    getDatabase,
    onValue,
    ref,
    set,
} from 'firebase/database'

import { signInUser, useCurrentAuthUser } from '../app/authentication'

export default function HomePage() {
    const db = getDatabase()

    const authUser = useCurrentAuthUser()
    const uid = authUser?.uid
    
    const [user, setUser] = useState({})
    const name = user?.name

    useEffect(() => {
        const userRef = ref(db, `user/${uid}`)
        onValue(userRef, async (snap) => {
            const userVal = snap.val()
            console.log({userVal})
            setUser(userVal)
        })
    }, [uid])

    const [userName, setUserName] = useState()

    useEffect(() => {
        setUserName(name)
    }, [name])


    const doUserNameChange = (e) => {
        const newUserName = e.target.value
        const cleanUserName = newUserName.replace(/[^a-z0-9]/gi, '_')
        setUserName(cleanUserName)
    }

    const doUpdateUser = async () => {
        await signInUser()
        const userNameOrDefault = userName || 'Untitled User'
        const userNameRef = ref(db, `user/${uid}/name`)
        await set(userNameRef, userNameOrDefault)
    }

    return (
        <div>
            <div>
                <h1>Bantr</h1>
                <p>A fun Ted Lasso-style game.</p>
                <h2>Join</h2>
                <p>Update your user name:</p>
                <input type="text" value={userName} onChange={doUserNameChange} />
                <button onClick={doUpdateUser}>Update</button>
                <p>User ID: {uid || 'Not logged in.'}</p>
                <p>User Name: {name || 'Not logged in.'}</p>
                <Link to="/match">Matches</Link>
            </div>
        </div>
    )
}