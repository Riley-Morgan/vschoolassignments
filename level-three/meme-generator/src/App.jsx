import React from 'react'
import Header from './Header.jsx'
import Meme from './Meme.jsx'
import MemeList from './MemeList'

 export default function App() {

  const [memeList, setMemeList] = React.useState([])

  function handleSubmit(meme) {
    setMemeList(prevmemeList => {
      return [
        ...prevmemeList,
        meme
      ]
    }) 
    console.log(memeList)
  }

  function handleEdit(meme, index, e) {
    e.preventDefault()
    setMemeList(prevmemeList => {
      return (
        prevmemeList.map((meme, i) => {
          return i === index
        })
      ) 
    })

  }


  function handleDelete(index) {
    setMemeList(prevmemeList => {
      return (
        prevmemeList.filter((meme, i) => {
          return i !== index
        })
      ) 
    })
  }

  return (
    <>
      <Header />
      <Meme memeList={memeList} handleSubmit={handleSubmit}/>
      <MemeList memeList={memeList} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

//filter
//react is reaction 