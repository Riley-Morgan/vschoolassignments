const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const movies = [
    { title: "die hard", genre: "action", _id: uuidv4() },
    { title: "black friday", genre: "musical", _id: uuidv4() },
    { title: "saw", genre: "horror", _id: uuidv4() },
    { title: "die hard 2", genre: "action", _id: uuidv4() },
]

// Get ALL
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

// Get One
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

// Get by genre
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

// Post One
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database.`)
})


module.exports = movieRouter