const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Bounty Blueprints //

const bountySchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    alive: {
        type: Boolean,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },
    alignment: {
        type: String,
        enum: ["Sith", "Jedi"],
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)