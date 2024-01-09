import {useState, useEffect, useRef} from 'react'

function useWordGame(startingTime) {
    
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startingTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function handleWordCount(text) {
    const wordsArray = text.trim().split(" ")
    /* OMIT SPACES BEFORE FIRST WORD AND AFTER LAST WORD */
    const filteredWords = wordsArray.filter( word => word !== "")  
    /* FILTER OUT SINGLE SPACES AS NOT WORDS */
    return filteredWords.length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(startingTime)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    const numWords = handleWordCount(text)
    setWordCount(numWords)
    /* DISPLAY WORD COUNT ONCE TIME REMAINING IS ZERO */
  }

  useEffect(() => {
    /* ISTIMERUNNING MUST BE TRUE TO START COUNTDOWN */
    /* STOP THE COUNTDOWN WHEN TIME REMAINING IS ZERO */
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if(timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}

}

export default useWordGame