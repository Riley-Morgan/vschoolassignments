const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    {firstname: "Darth",
     lastname: "Maul", 
     living: false, 
     bounty: 10, 
     type: "Sith",
     _id: uuidv4()
    },
    {firstname: "Luke",
     lastname: "Skywalker", 
     living: true, 
     bounty: 13, 
     type: "Jedi", 
     _id: uuidv4()
    },
    {firstname: "Count",
     lastname: "Dooku", 
     living: false, 
     bounty: 16, 
     type: "Sith", 
     _id: uuidv4()
    },
    {firstname: "Sheev",
     lastname: "Palpatine", 
     living: true, 
     bounty: 6, 
     type: "Sith", 
     _id: uuidv4()
    },
    {firstname: "Mace",
     lastname: "Windu", 
     living: false, 
     bounty: 8, 
     type: "Jedi", 
     _id: uuidv4()
    }
]

// Get All
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

// Get One
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

// Post One
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added the bounty for ${newBounty.firstname} ${newBounty.lastname}.`)
})

// Delete One
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty.")
})

// Update One
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateBounty = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedEntry = Object.assign(bounties[bountyIndex], updateBounty)
    res.send(updatedEntry)
})

module.exports = bountyRouter