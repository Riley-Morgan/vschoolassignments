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
// Get ONE // -- This will not be used

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
        const deletedWishlist = await Wishlist.findOneAndDelete({ _id: req.params.wishlistId})
        return res.status(200).send(`Removed ${deletedWishlist.name} from the wishlist.`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Update One // -- This will not be used
wishlistRouter.put("/:wishlistId", async (req, res, next) => {
    try {
        const updatedWishlist = await Wishlist.findOneAndUpdate({ _id: req.params.wishlistId}, req.body, {new: true})
        return res.status(201).send(updatedWishlist)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = wishlistRouter
