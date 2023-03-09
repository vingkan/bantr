import { useEffect, useState } from 'react'
import {
    getAuth,
    onAuthStateChanged,
    signInAnonymously,
    signOut,
} from 'firebase/auth'

export async function signInUser() {
    try {
        const auth = getAuth()
        const { user } = await signInAnonymously(auth)
        return {
            user,
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
                    return user
                }
                return prevAuthUser
            })
        })
        return unsubscribe
    }, [auth])

    return authUser
}