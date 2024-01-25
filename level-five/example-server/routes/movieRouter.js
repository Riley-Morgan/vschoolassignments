const express = require("express")
const movieRouter = express.Router()
//const {v4: uuidv4} = require("uuid") <-- DO NOT NEED ANYMORE, MONGODB CREATES IDS
const Movie = require('../models/movie.js')



/*
    --THIS DATA HAS BEEN MOVED TO THE DATABASE--
const movies = [
    { title: "die hard", genre: "action", _id: uuidv4() },
    { title: "black friday", genre: "musical", _id: uuidv4() },
    { title: "saw", genre: "horror", _id: uuidv4() },
    { title: "die hard 2", genre: "action", _id: uuidv4() },
]

*/

// Get ALL
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {                // err will always be first param, second will always be data requested //
        if(err) {                               // always handle error first
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// Get One
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie) {
        const error = new Error(`The item  with id: ${movieId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundMovie)
})

// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({genre: req.query.genre}, (err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// Post One
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err) {
            res.status(500)
            return res.next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

//Delete One
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({ _id: req.params.movieId}, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database.`)
    })
})

// Update One
movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId}, // find this one to update
        req.body, // update the object with this data
        { new: true}, // send back the updated version please
        (err, updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

module.exports = movieRouter