const express = require("express")
const app = express()

// Middleware (fires every request)
app.use(express.json())

// Routes

app.use("/todos", require("./routes/todoRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})