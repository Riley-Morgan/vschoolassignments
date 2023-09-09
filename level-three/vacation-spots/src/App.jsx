import React from 'react'
import Spot from "./Spot.jsx"
import data from './data.jsx'
import './App.css'

function App() {
  const worldSpots = data.map(item => {
    return (
      <Spot 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <section className='spot--list'>
      {worldSpots}
    </section>
  )
}

export default App
