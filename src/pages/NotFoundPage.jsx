import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div>
            <div>
                <h1>Page Not Found</h1>
                <p>Sorry about that!</p>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}