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

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added the bounty for ${newBounty.firstname} ${newBounty.lastname}.`)
})

module.exports = bountyRouter