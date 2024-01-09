import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext.jsx'

function MainBody(props) {

    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={`${color}--theme`}> 
           <h1>Click the button to switch to {color} mode.</h1>
           <button onClick={toggleTheme}>Switch Theme</button>
        </div>
    )


}

export default MainBody