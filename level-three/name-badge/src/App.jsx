import React from 'react'
import Form from './Form.jsx'
import Badge from './Badge.jsx'
import './App.css'

function App() {
  
  const [badgeArray, setBadgeArray] = React.useState([])

  function handleSubmit(formData) {
    setBadgeArray(prevBadgeArray => {
        return [
            ...prevBadgeArray,
            formData
        ]
    })
}

  return (
    <>
      <Form badgeArray = {badgeArray} handleSubmit = {handleSubmit} />
      <Badge badgeArray = {badgeArray}/>
    </>
  )
}

export default App
