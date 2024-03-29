import React, {useState, useEffect, useRef} from 'react'
import useWordGame from './useWordGame'

export default function App() {

    const {
      textBoxRef,
      handleChange,
      text,
      isTimeRunning,
      timeRemaining,
      startGame,
      wordCount
    } = useWordGame(20)

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea 
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled = {!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled = {isTimeRunning}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}
