import React, { useState, useContext } from 'react'
import Issue from './Issue'
import { UserContext } from '../context/UserProvider'

export default function EditForm(props) {

    const initInputs = {
        title: Issue.title || "", 
        description: Issue.description || ""
    }
    const [inputs, setInputs] = useState(initInputs)
    const { _id , toggle} = props
    const { editIssue } = useContext(UserContext)

    function handleChange(e) {
        const{name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleEditI(e) {
        e.preventDefault()
        editIssue(_id, inputs)
        toggle()
    }


    const { title, description } = inputs

    return (
        <form onSubmit={handleEditI}>
            <input 
                type='text'
                name='title'
                value={title}
                onChange={handleChange}

            />
            <input 
                type='text'
                name='description'
                value={description}
                onChange={handleChange}

            />
            <button>Submit</button> {/*DO NOT PUT TOGGLE HERE, WILL BREAK CODE */}
        </form>
    )
}