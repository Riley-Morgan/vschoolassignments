const express =  require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
app.use(morgan("dev")) // Logs requests to the console

// Connect to DB //

mongoose.connect("mongodb+srv://test_user_1:f4i6Rh4XqwyMhTpp@cluster0.gg7dkd5.mongodb.net/moviesdb?retryWrites=true&w=majority", () => console.log('connected to database'))



// Routes // 

app.use("/api/movies", require("./routes/movieRouter.js"))

app.use("/api/tvshows", require("./routes/tvshowRouter.js"))

// Error Handler //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})