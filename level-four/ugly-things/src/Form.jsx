import React, {useState, useContext} from 'react'
import { UglyContext } from './UglyContext'

export default function Form(props) {

    const {handleSubmit} = useContext(UglyContext)

    const [ugly, setUgly] = useState({
        imgUrl: "",
        title: "",
        description: ""
    })

    function submit(event) {
        event.preventDefault()
        handleSubmit(ugly)
        console.log('Clicked')
    }

    function handleChange(event) {
        const{name,value} = event.target
        setUgly(prevUgly => ({
            ...prevUgly,
            [name]: value
        }))
    }

    return (
        <div className='ugly--form' >
            <input 
                type='text'
                placeholder='Image URL'
                name='imgUrl'
                value={ugly.imgUrl}
                onChange={handleChange}
            />

            <input 
                type='text'
                placeholder='Title'
                name='title'
                value={ugly.title}
                onChange={handleChange}
            />

            <input 
                type='text'
                placeholder='Description'
                name='description'
                value={ugly.description}
                onChange={handleChange}
            />

            <button onClick={submit}>Submit</button>
        </div>
    )
}