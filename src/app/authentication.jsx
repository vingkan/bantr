/* global localStorage */
import { useEffect, useState } from 'react'
import {
    getAuth,
    onAuthStateChanged,
    signInAnonymously,
    signOut,
} from 'firebase/auth'

const USER_ID_KEY = 'bantr__uid'

function getDeviceUser(user) {
    // Overwrite auth user ID with device user ID
    const deviceUid = localStorage.getItem(USER_ID_KEY)
    const deviceUser = {
        ...user,
        uid: deviceUid || user?.uid,
    }
    // Store result user ID to device
    if (deviceUser?.uid) {
        localStorage.setItem(USER_ID_KEY, deviceUser?.uid)
    }
    return deviceUser
}

export async function signInUser() {
    try {
        const auth = getAuth()
        const { user } = await signInAnonymously(auth)
        return {
            user: getDeviceUser(user),
            error: null,
        }
    } catch (err) {
        return {
            user: null,
            error: err,
        }
    }
}

export async function signOutUser() {
    try {
        const auth = getAuth()
        await signOut(auth)
        return {
            success: true,
            error: null,
        }
    } catch (err) {
        return {
            success: false,
            error: err,
        }
    }
}

export function useCurrentAuthUser() {
    const [authUser, setAuthUser] = useState(null)

    // Update state of authenticated user
    const auth = getAuth()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser((prevAuthUser) => {
                if (prevAuthUser?.uid !== user?.uid) {
                    return getDeviceUser(user)
                }
                return getDeviceUser(prevAuthUser)
            })
        })
        return unsubscribe
    }, [auth])

    return authUser
}