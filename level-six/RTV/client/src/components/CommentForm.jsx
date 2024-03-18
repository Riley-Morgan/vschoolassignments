import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'


const initInputs = {
        text: ""
    }


export default function CommentForm(props) {
    
    const [inputs, setInputs] = useState(initInputs)
    const { issueId } = props
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
        addComment(issueId, inputs)
        setInputs(initInputs)
    }
    
    
    const {text} = inputs

   return (
    <form onSubmit={handleSubmitC}>
        <input 
            type='text'
            name='text'
            value={text}
            onChange={handleChangeC}
            placeholder='Comment'
        />
        <button>Comment</button>
    </form>
   )
}