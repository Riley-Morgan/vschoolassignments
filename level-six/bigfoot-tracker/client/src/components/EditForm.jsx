import { useState, useContext } from 'react'
import Sighting from './Sighting.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function EditForm(props) {

    const initInputs = {
        title: Sighting.title || "",
        text: Sighting.text || ""
    }

    const [inputs, setInputs] = useState(initInputs)
    const { _id, toggle } = props
    const { editSighting } = useContext(UserContext)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleEditS(e) {
        e.preventDefault()
        editSighting(_id, inputs)
        toggle()
    }

    const { title, text } = inputs

    return (
        <form className="edit-form" onSubmit={handleEditS}>
            <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="text"
                value={text}
                onChange={handleChange}
            />
            <button>Submit</button> {/*DO NOT PUT TOGGLE FUNCTION HERE, WILL BREAK CODE*/}
        </form>
    )
}