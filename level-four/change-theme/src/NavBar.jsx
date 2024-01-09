import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext.jsx'

export default function NavBar(props) {

    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}--theme`}>
            <h2>Home</h2>
            <h2>Contact</h2>
            <h2>About</h2>
        </div>
    )
}
