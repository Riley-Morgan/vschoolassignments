const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sightingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    dislikedUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("Sighting", sightingSchema)