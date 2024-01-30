const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Notes Blueprint //
const notesSchema = new Schema({
    review: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Notes", notesSchema)