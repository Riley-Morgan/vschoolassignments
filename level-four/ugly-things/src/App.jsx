import React, {useState} from 'react'
import Form from './Form.jsx'
import UglyList from './UglyList'
import {UglyContextProvider} from './UglyContext.jsx'

function App(props) {
  

  return (
    <>
      <Form />
      <UglyList />
    </>
  )
}

export default App
