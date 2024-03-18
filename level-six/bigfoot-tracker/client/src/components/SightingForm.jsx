import { useState } from 'react'

const initInputs = {
    title: "",
    text: ""
}

export default function SightingForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const { addSighting } = props

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addSighting(inputs)
        setInputs(initInputs)
    }

    const {title, text} = inputs

    return (
        <form className="sighting-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="title"
            />
            <input 
                type="text"
                name="text"
                value={text}
                onChange={handleChange}
                placeholder="text"
            />
            <button>Submit</button>
        </form>
    )
}