const express =  require("express")
const app = express()

// Middleware (for every request) //
app.use(express.json())

// Fake Data
const movies = [
    { title: "die hard", genre: "action" },
    { title: "black friday", genre: "musical" },
    { title: "saw", genre: "horror" },
    { title: "die hard 2", genre: "action" },
]

app.get("/movies", (req, res) => {
    res.send(movies)
})

app.post("/movies", (req, res) => {
    const newMovie = req.body
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database.`)
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})