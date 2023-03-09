/* global localStorage */

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    getDatabase,
    onValue,
    ref,
    set,
} from 'firebase/database'

import { signInUser, useCurrentAuthUser } from '../app/authentication'
import { useUser } from '../app/user'

export default function HomePage() {
    const db = getDatabase()
    const navigateTo = useNavigate()

    // TODO: Create and join rooms by code.
    localStorage.setItem('bantr__room', '9417')

    const roomId = localStorage.getItem('bantr__room')

    const user = useUser(db)
    const uid = user?.uid
    const name = user?.name || ''

    const [userName, setUserName] = useState('')

    useEffect(() => {
        setUserName(name)
    }, [name])

    const doUserNameChange = (e) => {
        const newUserName = e.target.value
        const cleanUserName = newUserName.replace(/[^a-z0-9]/gi, '_')
        setUserName(cleanUserName)
    }

    const doUpdateUser = async () => {
        const result = await signInUser()
        const resultUid = result?.user?.uid
        const userNameOrDefault = userName || 'Untitled_User'
        const userNameRef = ref(db, `user/${resultUid}`)
        await set(userNameRef, {
            name: userNameOrDefault,
            room: roomId,
        })
        navigateTo('/match')
    }

    return (
        <div>
            <div class="Section">
                <div className="UserNameForm Center">
                    <p>Update your user name:</p>
                    <input type="text" value={userName} onChange={doUserNameChange} />
                    <button
                        className="PlayButton"
                        onClick={doUpdateUser}
                    >
                        <span>Play</span>
                    </button>
                </div>
            </div>
        </div>
    )
}