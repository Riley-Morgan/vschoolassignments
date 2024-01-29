const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware //

app.use(express.json())
app.use(morgan("dev"))

// Connect to DB //

mongoose.connect("mongodb+srv://test_user_1:f4i6Rh4XqwyMhTpp@cluster0.gg7dkd5.mongodb.net/crudstore?retryWrites=true&w=majority", () => console.log('connected to database'))

// Routes //

app.use("/api/inventory", require("./routes/inventoryRouter.js"))

// Server Listen //

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})