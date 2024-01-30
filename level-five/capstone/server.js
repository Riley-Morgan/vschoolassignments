const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware //
app.use(express.json())
app.use(morgan("dev"))

// DB Connection //
mongoose.connect("mongodb+srv://test_user_1:f4i6Rh4XqwyMhTpp@cluster0.gg7dkd5.mongodb.net/travelblog?retryWrites=true&w=majority", () => console.log('connected to database'))

// Routes //
app.use("/api/wishlist", require("./routes/wishlistRouter.js"))
app.use("/api/notes", require("./routes/notesRouter.js"))
app.use("/api/visited", require("./routes/visitedRouter.js"))

// Error Handling //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(7700, () => {
    console.log("The server is running on Port 7700")
})

/* 
C - CREATE (POST)
R - READ (GET)
U - UPDATE (PUT)
D - DESTROY (DELETE)
*/