const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")


// Get All //
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.get('/async', async(req, res, next) => {
    try {
        const bounties = await Bounty.find()
        return res.status(200).send(bounties)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get One //
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty) {
        const error = new Error(`The bounty of ${bountyId} could not be found`)
        res.status(500)
        return next(error)
    }
    return res.status(200).send(foundBounty)
})

// Post One //
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.post('/async', async (req,res,next) => {
    try {
        const newBounty = new Bounty(req.body)
        const savedBounty = await newBounty.save()   // FOR ASYNC MAKE VARIABLE FIRST, THEN RUN FUNCTION
        return res.status(201).send(savedBounty)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Delete One //
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId}, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted the bounty of: ${deletedItem.firstname} ${deletedItem.lastname}, from the database`)
    })
})

// Update One //
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

/* 
C - CREATE (POST)
R - READ (GET)
U - UPDATE (PUT)
D - DESTROY (DELETE)
*/

module.exports = bountyRouter

