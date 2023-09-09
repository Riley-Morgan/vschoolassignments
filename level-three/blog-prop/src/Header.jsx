import React from 'react'
import Navbar from './Navbar.jsx'


export default function Header() {
    return (
        <div className='header--box'>
            <Navbar />
            <h1 className="header--title">Clean Blog</h1>
            <h3 className="header--sub">A Blog Theme by Start Bootstrap</h3>
        </div>
    )
}