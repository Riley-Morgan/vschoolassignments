const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const {expressjwt} = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect(
    "mongodb+srv://test_user_1:f4i6Rh4XqwyMhTpp@cluster0.gg7dkd5.mongodb.net/BFTRACKER?retryWrites=true&w=majority",
    () => console.log('Connected to the DB')
  )

app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", expressjwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/sighting", require("./routes/sightingRouter.js"))
app.use("/api/comment", require("./routes/commentRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Server is running on local port 9000")
})