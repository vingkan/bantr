import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getDatabase } from 'firebase/database'

import { useUser } from '../app/user'

export default function Layout() {
    const db = getDatabase()
    const user = useUser(db)
    const name = user?.name || 'someone'
    return (
        <div className="Layout">
            <h3 className="MyUserName">{name}</h3>
            <h1 className="AppTitle">
                <Link to="/">bantr</Link>
            </h1>
            <Outlet />
        </div>
    )
}