const express =  require("express")
const app = express()

// Middleware
app.use(express.json())

//Route (also will be middleware)
app.use("/items", (req, res, next) => {
    console.log("middleware was fired off.")
    next()
})

app.use("/items", require("./routes/itemRouter.js"))

app.get("/items", (req, res, next) => {
    console.log("get request was fired off.")
    res.send(req.body)
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
