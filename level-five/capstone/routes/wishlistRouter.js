const express = require("express")
const wishlistRouter = express.Router()
const Wishlist = require("../models/wishlistcountry.js")

// Get ALL //
wishlistRouter.get("/", async (req, res, next) => {
    try {
        const wishlist = await Wishlist.find()
        return res.status(200).send(wishlist)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
// Get ONE //

// Post One //
wishlistRouter.post("/", async (req, res, next) => {
    try {
        const newWishlist = new Wishlist(req.body)
        const savedWishlist = await newWishlist.save()
        return res.status(201).send(savedWishlist)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Delete One //
wishlistRouter.delete("/:wishlistId", async (req, res, next) => {
    try {
        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Update One // -- I don't feel this is necessary

module.exports = wishlistRouter
