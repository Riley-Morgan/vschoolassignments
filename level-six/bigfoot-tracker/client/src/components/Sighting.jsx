import { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'
import EditForm from './EditForm.jsx'
import Votes from './Votes.jsx'


export default function Sighting(props) {
    const { title, text, _id, likedUsers, dislikedUsers } = props
    const [editToggle, setEditToggle] = useState(false)
    const { comments, deleteSighting } = useContext(UserContext)
    
    const filteredComments = comments.filter(comment => comment.sighting === _id)
    const sightingComments = filteredComments.map(comment => <Comment key={comment._id} text={comment.text}/>)

    function handleDeleteS(e) {
        e.preventDefault()
        deleteSighting(_id)
    }

    return (
        <div className="sighting">
            <Votes 
                _id={_id}
                likedUsers={likedUsers}
                dislikedUsers={dislikedUsers}
            />
            {!editToggle ? 
                <>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    <button onClick={handleDeleteS}>Delete</button>
                </>
            : 
                <>
                    <EditForm 
                        title={title}
                        text={text}
                        _id={_id}
                        toggle={() => setEditToggle(prevToggle => !prevToggle)}
                    />
                </>
            }
            <div className="comment-list">
                {sightingComments}
            </div>
            <CommentForm sightingId={_id}/>
        </div>
    )
}