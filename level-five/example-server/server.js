const express =  require("express")
const app = express()
const morgan = require("morgan")

// Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
app.use(morgan("dev")) // Logs requests to the console

// Routes // 

app.use("/movies", require("./routes/movieRouter.js"))

app.use("/tvshows", require("./routes/tvshowRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})