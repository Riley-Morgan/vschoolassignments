import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.jsx'

function Bounty(props) {
    const { firstname, lastname, living, type, bounty, _id } = props
    const [ editToggle, setEditToggle ] = useState(false)

    return (
        <div className="bounty">
            { !editToggle ? 
                <>
                    <h1>Name: {firstname} {lastname}</h1>
                    <h4>Status: {living}</h4>
                    <h4>Alignment: {type}</h4>
                    <h4>Worth: {bounty}</h4>
                    <button
                        className="delete-btn"
                        onClick={() => props.deleteBounty(_id)}>
                        Delete
                    </button>
                    <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </> 
            : 
                <>
                    <AddBountyForm 
                        firstname={firstname}
                        lastname={lastname}
                        _id={_id}
                        living={living}
                        type={type}
                        bouty={bounty}
                        btnText="Submit Edit"
                        submit={props.editBounty}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default Bounty