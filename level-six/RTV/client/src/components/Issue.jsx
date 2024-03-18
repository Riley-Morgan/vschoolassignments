import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider.jsx'
import Comment from './Comments.jsx'
import CommentForm from './CommentForm.jsx'
import EditForm from './EditForm.jsx'
import Votes from './Votes.jsx'

export default function Issue(props) {

    const { title, description, _id, likedUsers, dislikedUsers } = props

    const [editToggle, setEditToggle] = useState(false)

    const { comments, deleteIssue } = useContext(UserContext)
    // console.log(comments)
    const filteredComments = comments.filter(comment => comment.issue === _id)
    // console.log(filteredComments)

    const issueComments = filteredComments.map(comment => <Comment key={comment._id} text={comment.text} />)

    //  <h3 key={comment._id}>{comment.text}</h3>

    function handleDeleteI(e) {
        e.preventDefault()
        deleteIssue(_id)
    }

    

    return (
        <div className='issue'>
            <Votes 
                _id= {_id}
                likedUsers={likedUsers}
                dislikedUsers={dislikedUsers}
            />
            {!editToggle ?
                <>
                    <h1>{title}</h1>
                    <h4>{description}</h4>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit Post</button>
                    <button onClick={handleDeleteI}>Delete Post</button>
                </>
            :
                <>
                    <EditForm 
                        title={title}
                        description={description}
                        _id={_id}
                        toggle={() => setEditToggle(prevToggle => !prevToggle)}
                    />
                </>
            
            }
            


            <CommentForm issueId={_id}/>
            {issueComments}

        </div>
    )
}