const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",  //reference to the user who made the comment
        required: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",  //reference to the issue the comment is related to
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)