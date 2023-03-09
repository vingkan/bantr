import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div>
            <div className="Section Center">
                <h2>Page Not Found</h2>
                <p>Sorry about that!</p>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}