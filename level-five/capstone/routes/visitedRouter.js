const express = require("express")
const visitedRouter = express.Router()
const Visited = require("../models/visitedcountry.js")

// Get ALL //
visitedRouter.get("/", (req, res, next) => {
    Visited.find((err, countries) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(countries)
    })
})

// Get ONE //
visitedRouter.get("/:visitedId", (req, res, next) => {
    const visitedId = req.params.visitedId
    const foundVisited = visited.find(visit => visit._id === visitedId)
    if(!foundVisited) {
        const error = new Error(`${visitedId} is not on the list!`)
        res.status(500)
        return next(err)
    }
    return res.status(200).send(foundVisited)
})

// Get by CONTINENT //
visitedRouter.get("/search/continent", (req, res, next) => {
    Visited.find({continent: req.query.continent}, (err, visited) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(visited)
    })
})

// Post One //
visitedRouter.post("/", (req, res, next) => {
    const newVisited = new Visited(req.body)
    newVisited.save((err, savedVisited) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedVisited)
    })
})

// Delete One //
visitedRouter.delete("/:visitedId", (req, res, next) => {
    Visited.findOneAndDelete({ _id: req.params.visitedId}, (err, deletedCountry) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deletedCountry.name} was removed.`)
    })
})

// Update One //
visitedRouter.put("/:visitedId", (req, res, next) => {
    Visited.findOneAndUpdate(
        { _id: req.params.visitedId},
        req.body,
        {new: true},
        (err, updatedVisited) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedVisited)
        }
    )
})

module.exports = visitedRouter
