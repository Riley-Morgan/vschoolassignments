import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider.jsx'

const initInputs = {
    text: ""
}

export default function CommentForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const { sightingId } = props
    const { addComment } = useContext(UserContext)

    function handleChangeC(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmitC(e) {
        e.preventDefault()
        addComment(sightingId, inputs)
        setInputs(initInputs)
    }

    const { text } = inputs

    return (
        <form className="comment-form" onSubmit={handleSubmitC}>
            <input 
                type="text"
                name="text"
                value={text}
                onChange={handleChangeC}
                placeholder="comment here"
            />
            <button>Comment</button>
        </form>
    )
}