import { useState } from 'react'

function App() {
  const [colorOne, setColorOne] = useState([])
  const [colorTwo, setColorTwo] = useState([])
  const [angle, setAngle] = useState([])


  return (
    <>
      <h1>CSS Gradient Generator</h1>
      <div className='big--box'>
        <div className='display--box'>
          <img className='show--color'/>
          <textarea readOnly value="background: linear-gradient(50deg, #fbd2c8 , #df536c);"/>
        </div>
        <div className='input--box'>
          <h2>Options</h2>
          <span>
            <label>Color #1</label>
            <input type='color'></input>
          </span>
          <br></br>
          <span>
            <label>Color #2</label>
            <input type='color'></input>
          </span>
          <br></br>
          <span>
            <label>Angle</label>
            <input type='number'  id="fade" name="fade" min="1" max="100"></input>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
