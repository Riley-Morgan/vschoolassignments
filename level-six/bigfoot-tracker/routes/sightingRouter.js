const express = require("express")
const sightingRouter = express.Router()
const Sighting = require("../models/sighting.js")

// GET ALL SIGHTINGS
sightingRouter.get("/", (req, res, next) => {
    Sighting.find((err, sightings) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(sightings)
    })
})

// GET SIGHTINGS BY USER
sightingRouter.get("/user", (req, res, next) => {
    Sighting.find({user: req.auth._id}, (err, sightings) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(sightings)
    })
})

// ADD NEW SIGHTING
sightingRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id                 //user who is posting the sighting
    const newSighting = new Sighting(req.body)
    newSighting.save((err, savedSighting) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedSighting)
    })
})

// DELETE SIGHTING
sightingRouter.delete("/:sightingId", (req, res, next) => {
    Sighting.findOneAndDelete(
        {_id: req.params.sightingId, user: req.auth._id},  //only the user that made the issue can delete it
        (err, deletedSighting) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted sighting: ${deletedSighting.title}`)
        }
    )
})

// UPDATE SIGHTING
sightingRouter.put("/:sightingId", (req, res, next) => {
    Sighting.findOneAndUpdate(
        {_id: req.params.sightingId, user: req.auth._id},  //only the user that made the issue can edit it
        req.body,
        {new: true},
        (err, updatedSighting) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedSighting)
        }
    )
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// UPVOTE SIGHTING
sightingRouter.put("/upVote/:sightingId", (req, res, next) => {
    Sighting.findOneAndUpdate(
        {_id: req.params.sightingId},
        {
            $addToSet: { likedUsers: req.auth._id},
            $pull: { dislikedUsers: req.auth._id}
        },
        {new: true},
        (err, updatedSighting) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedSighting)
        }
    )
})

// DOWNVOTE SIGHTING
sightingRouter.put("/downVote/:sightingId", (req, res, next) => {
    Sighting.findOneAndUpdate(
        {_id: req.params.sightingId},
        {
            $addToSet: { dislikedUsers: req.auth._id},
            $pull: { likedUsers: req.auth._id}
        },
        {new: true},
        (err, updatedSighting) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedSighting)
        }
    )
})

module.exports = sightingRouter