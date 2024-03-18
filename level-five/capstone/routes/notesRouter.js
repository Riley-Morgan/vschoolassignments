const express = require("express")
const notesRouter = express.Router()
const Notes = require("../models/visitednotes.js")

// Get ALL //
notesRouter.get("/", (req, res, next) => {
    Notes.find((err, notes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(notes)
    })
})

// Get ONE //
notesRouter.get("/:notesId", (req, res, next) => {
    const notesId = req.params.notesId
    const foundNotes = notes.find(notes => notes._id === notesId)
    if(!foundNotes) {
        const error = new Error(`The note with id: ${notesId} could not be found.`)
        res.status(500)
        return next(err)
    }
    res.status(200).send(foundNotes)
})

// Get by COUNTRY //
notesRouter.get("/search/countryof", (req, res, next) => {
    Notes.find({countryof: req.query.countryof}, (err, notes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(notes)
    })
})

// Post One //
notesRouter.post("/:visitedId", (req, res, next) => {
    req.body.countryof = req.params.visitedId
    const newNotes = new Notes(req.body)
    newNotes.save((err, savedNotes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedNotes)
    })
})

// Delete One //
notesRouter.delete("/:notesId", (req, res, next) => {
    Notes.findOneAndDelete({ _id: req.params.notesId}, (err, deletedNotes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Removed the note about ${deletedNotes.countryof}.`)
    })
})

// Update One //
notesRouter.put("/:notesId", (req, res, next) => {
    Notes.findOneAndUpdate(
        { _id: req.params.notesId},
        req.body,
        {new: true},
        (err, updatedNotes) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedNotes)
        }
    )
})

module.exports = notesRouter
