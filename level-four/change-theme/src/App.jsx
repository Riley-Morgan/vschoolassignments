import React, { useState } from 'react'
import NavBar from './NavBar.jsx'
import MainBody from './MainBody.jsx'
import Foot from './Foot.jsx'
import {ThemeContextProvider} from './ThemeContext.jsx'


function App(props) {

  return (
    <>
        <NavBar />
        <MainBody />
        <Foot />
    </>
  )
}

export default App
