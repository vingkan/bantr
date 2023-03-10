/* global localStorage */
/* global document */

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

const ROOM_CODE_KEY = 'bantr__room'

export default function HomePage() {
    const db = getDatabase()
    const navigateTo = useNavigate()

    const roomId = localStorage.getItem(ROOM_CODE_KEY)

    const [roomCode, setRoomCode] = useState(roomId)

    useEffect(() => {
        const query = document.location.search
        const codeFromQuery = query?.split('room=')?.[1]?.split('&')?.[0]
        if (!codeFromQuery) {
            return
        }
        const cleanRoomCode = codeFromQuery.replace(/[^0-9]/gi, '').substring(0, 8)
        localStorage.setItem(ROOM_CODE_KEY, cleanRoomCode)
        setRoomCode(cleanRoomCode)
    }, [])

    const doRoomCodeChange = (e) => {
        const newRoomCode = e.target.value
        const cleanRoomCode = newRoomCode.replace(/[^0-9]/gi, '').substring(0, 8)
        localStorage.setItem(ROOM_CODE_KEY, cleanRoomCode)
        setRoomCode(cleanRoomCode)
    }

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
            room: roomCode,
        })
        if (roomCode) {
            navigateTo('/match')
        }
    }

    const noRoomCode = <p>You must enter a room code to play.</p>

    return (
        <div>
            <div className="Home Section">
                <div className="UserNameForm Center">
                    <p>Room Code:</p>
                    <input type="text" value={roomCode} onChange={doRoomCodeChange} />
                    <p>User Name:</p>
                    <input type="text" value={userName} onChange={doUserNameChange} />
                    {!roomCode && noRoomCode}
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