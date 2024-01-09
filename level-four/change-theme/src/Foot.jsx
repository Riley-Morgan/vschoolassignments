import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext.jsx'

function Foot() {

    const {color} = useContext(ThemeContext)

    return (
        <footer className={`${color}--theme`}>This is the bottom of the page</footer>
    )
}

export default Foot 