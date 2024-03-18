import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Votes(props) {

    const { upVoteIssue, downVoteIssue } = useContext(UserContext)
    const { _id, likedUsers, dislikedUsers } = props
    
    return (
        <>
            <button onClick={() => upVoteIssue(_id)}>{likedUsers.length} Likes</button>
            <button onClick={() => downVoteIssue(_id)}>{dislikedUsers.length}Dislikes</button>
        </>
    )
}