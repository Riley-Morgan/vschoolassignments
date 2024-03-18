const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",                  //reference to the user who made the comment
        required: true
    },
    sighting: {
        type: String,
        ref: "Sighting",             //reference to the sighting the comment is tied to
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)