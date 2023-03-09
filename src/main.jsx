/* global document */
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/style.css'

// Set page title for entire app
document.title = 'Bantr'

// Initialize React app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="bantr">
            <App />
        </BrowserRouter>
    </React.StrictMode>
)