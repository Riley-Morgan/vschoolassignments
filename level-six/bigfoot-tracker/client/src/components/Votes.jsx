import { useContext } from 'react'
import { UserContext } from '../context/UserProvider.jsx'

export default function Votes(props) {
    const { upVoteSighting, downVoteSighting } = useContext(UserContext)
    const { _id, likedUsers, dislikedUsers } = props

    return (
        <>
            <button onClick={() => upVoteSighting(_id)}>{likedUsers.length} &#129093;</button>
            <button onClick={() => downVoteSighting(_id)}>{dislikedUsers.length} &#129095;</button>
        </>
    )
}