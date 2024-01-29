import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './Bounty.jsx'
import AddBountyForm from './AddBountyForm.jsx'

function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/api/bounties")
     .then(res => setBounties(res.data))
     .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("/api/bounties", newBounty)
     .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
     })
     .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/api/bounties/${bountyId}`)
     .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
     })
     .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/api/bounties/${bountyId}`, updates)
     .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      .catch(err => console.log(err))
     })
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div>
      <div className="bounty-container">
        <AddBountyForm
          submit={addBounty}
          btnText="Add Bounty"
        />
      <div className="bounty-list">
        {
          bounties.map(bounty => 
            <Bounty
              {...bounty}
              key={bounty.firstname}
              deleteBounty={deleteBounty}
              editBounty={editBounty} 
            />
          )
        }
      </div>
      </div>
    </div>
  )
}

export default App
