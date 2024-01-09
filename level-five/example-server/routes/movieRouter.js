const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const movies = [
    { title: "die hard", genre: "action", _id: uuidv4() },
    { title: "black friday", genre: "musical", _id: uuidv4() },
    { title: "saw", genre: "horror", _id: uuidv4() },
    { title: "die hard 2", genre: "action", _id: uuidv4() },
]

movieRouter.get("/", (req, res) => {
    res.send(movies)
})

movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database.`)
})






module.exports = movieRouter