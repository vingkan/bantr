/* global localStorage */

import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

import { FirebaseAppContext, createFirebaseApp } from './app/firebase'

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const BASE_URL = '/bantr'
const REDIRECT_PATHNAME_KEY = 'bantr__pathname'

function AppRouting() {
    // Handle redirect on static site
    const navigateTo = useNavigate()
    useEffect(() => {
        const redirectFullPathname = localStorage.getItem(REDIRECT_PATHNAME_KEY)
        if (redirectFullPathname) {
            localStorage.setItem(REDIRECT_PATHNAME_KEY, '')
            const redirectPathname = redirectFullPathname.substring(BASE_URL.length)
            navigateTo(redirectPathname)
        }
    }, [navigateTo])

    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default function App() {
    const firebaseApp = createFirebaseApp()
    return (
        <div className="App Theme">
            <FirebaseAppContext.Provider value={firebaseApp}>
                <AppRouting />
            </FirebaseAppContext.Provider>
        </div>
    )
}