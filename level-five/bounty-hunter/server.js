const express =  require("express")
const app = express()
const morgan = require("morgan")
mongoose = require("mongoose")

// Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
app.use(morgan("dev")) // Logs requests to the console

// Connect to DB //
mongoose.connect("mongodb+srv://test_user_1:f4i6Rh4XqwyMhTpp@cluster0.gg7dkd5.mongodb.net/bountyhunter?retryWrites=true&w=majority", () => console.log('connected to database'))

// Routes //
app.use("/api/bounties", require("./routes/bountyRouter.js"))

// Error Handler //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})