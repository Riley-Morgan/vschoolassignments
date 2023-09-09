import React from 'react'
import './index.css'


export default function App() {
    
  const [color, setColor] = React.useState([])

  function getNewColor() {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
         .then(res => setColor(res.data.colors[0].hex))
         .catch(err => console.log(err))
  }
  
  React.useEffect(() => {
      // fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      // .then(res => res.json())
      // .then(data => setColor(data))

      getNewColor()
      console.log(color)



  },[])
  
  
  


  // console.log(newColor)

  // function getData() {
  //   axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
  //     .then(rex => console.log(res))
  //     .catch(err => console.log(err))
  // }

  
  return (
      <div className='bigbox'>
        <h2 style={{backgroundColor: `#${color}`}}>Look at this!</h2>
          <button onClick={getNewColor}>New color</button>
      </div>
  )
}
