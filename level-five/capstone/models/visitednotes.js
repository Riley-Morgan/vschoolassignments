const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Notes Blueprint //
const notesSchema = new Schema({
    note: {
        type: String,
        required: true
    },
    countryof: {
        type: Schema.Types.ObjectId,
        ref: "Visited",
        required: true
    }
})

module.exports = mongoose.model("Notes", notesSchema)