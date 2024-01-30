const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Visited Country Blueprint //
const visitedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        enum: ["North America", "South America", "Asia", "Europe", "Africa", "Oceania"],
        required: true
    },
    yearvisited: {
        type: Number,
        required: true
    },
    seasonvisited: {
        type: String,
        enum: ["Spring", "Summer", "Autumn", "Winter"]
    },
    traveledalone: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Visited", visitedSchema)