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
import { CharacterSelector } from '../app/characters'
import { useUser, getRoomCodeFromUrl } from '../app/user'

const ROOM_CODE_KEY = 'bantr__room'

export default function HomePage() {
    const db = getDatabase()
    const navigateTo = useNavigate()

    const roomId = localStorage.getItem(ROOM_CODE_KEY) || ''

    const [roomCode, setRoomCode] = useState(roomId)

    useEffect(() => {
        const codeFromQuery = getRoomCodeFromUrl()
        if (!codeFromQuery) {
            return
        }
        localStorage.setItem(ROOM_CODE_KEY, codeFromQuery)
        setRoomCode(codeFromQuery)
    }, [])

    const doRoomCodeChange = (e) => {
        const newRoomCode = e.target.value
        const cleanRoomCode = newRoomCode.replace(/[^0-9]/gi, '').substring(0, 8)
        localStorage.setItem(ROOM_CODE_KEY, cleanRoomCode)
        setRoomCode(cleanRoomCode)
    }

    const user = useUser(db, roomCode)
    const uid = user?.uid
    const name = user?.name || ''
    const userRealName = user?.realName || ''
    const chosenCharacter = user?.character

    const [userName, setUserName] = useState('')

    useEffect(() => {
        setUserName(name)
    }, [name])

    const [realName, setRealName] = useState('')

    useEffect(() => {
        setRealName(userRealName)
    }, [userRealName])

    const [characterId, setCharacterId] = useState()

    useEffect(() => {
        setCharacterId(chosenCharacter)
    }, [chosenCharacter])

    const doUserNameChange = (e) => {
        const newUserName = e.target.value
        const cleanUserName = newUserName.replace(/[^a-z0-9]/gi, '_')
        setUserName(cleanUserName)
    }

    const doUpdateUser = async () => {
        const result = await signInUser()
        const resultUid = result?.user?.uid
        const userNameOrDefault = userName || ''
        const realNameOrDefault = realName || ''
        const userNameRef = ref(db, `user/${roomCode}/${resultUid}`)
        await set(userNameRef, {
            name: userNameOrDefault,
            realName: realNameOrDefault,
            character: characterId,
            room: roomCode,
        })
        if (userName && realName && roomCode && characterId) {
            navigateTo('/match')
        }
    }

    const noNames = <p>Enter your real name and screen name.</p>
    const noRoomCode = <p>Enter a room code to play.</p>
    const noCharacter = <p>Choose a character to play.</p>

    return (
        <div>
            <div className="Home Section">
                <div className="UserNameForm Center">
                    <p>Room Code:</p>
                    <input type="text" value={roomCode} onChange={doRoomCodeChange} />
                    <p>Your Real Name:</p>
                    <input type="text" value={realName} onChange={(e) => setRealName(e.target.value.trim())} />
                    <p>Your Screen Name:</p>
                    <input type="text" value={userName} onChange={doUserNameChange} />
                    <p>Your Character:</p>
                    <CharacterSelector {...{ characterId, setCharacterId, }} />
                    {(!userName || !realName) && noNames}
                    {!roomCode && noRoomCode}
                    {!characterId && noCharacter}
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