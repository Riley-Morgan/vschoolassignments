import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.jsx'
import EditForm from './EditForm.jsx'

function Bounty(props) {
    const { firstname, lastname, alive, alignment, bounty, _id } = props
    const [ editToggle, setEditToggle ] = useState(false)

    const flipToggle = () => setEditToggle(prevToggle => !prevToggle)

    return (
        <div className={`bounty--${alignment}`}>
            { !editToggle ? 
                <>
                    <h1>Name: {firstname} {lastname}</h1>
                    <h4>Status: {alive ? "Alive" : "Dead"}</h4>
                    <h4>Alignment: {alignment}</h4>
                    <h4>Worth: {bounty}</h4>
                    <button
                        className="delete-btn"
                        onClick={() => props.deleteBounty(_id)}>
                        Delete
                    </button>
                    <button
                        className="edit-btn"
                        onClick={flipToggle}>
                        Edit
                    </button>
                </> 
            : 
                <>
                    <EditForm 
                        firstname={firstname}
                        lastname={lastname}
                        _id={_id}
                        alive={alive}
                        alignment={alignment}
                        bounty={bounty}
                        btnText="Submit Edit"
                        submit={props.editBounty}
                        flipToggle = {flipToggle}
                    />
                    <button onClick={flipToggle}>Close</button>
                </>
            }
        </div>
    )
}

export default Bounty