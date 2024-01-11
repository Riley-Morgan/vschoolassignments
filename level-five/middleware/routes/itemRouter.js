const express = require("express")
const itemRouter = express.Router()

itemRouter.use((req, res, next) => {
    req.body = { name: "bimothy", job: "pirate" }
    console.log("Yarrr!")
    next()
})

module.exports = itemRouter