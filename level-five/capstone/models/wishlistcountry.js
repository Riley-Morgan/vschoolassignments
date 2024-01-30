const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Wishlist Country Blueprint //
const wishlistSchema = new Schema({
    name: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model("Wishlist", wishlistSchema)