const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment.js")

// GET COMMENTS BY SIGHTING
commentRouter.get("/:sightingId", (req, res, next) => {
    Comment.find({sighting: req.params.sightingId}, (err, comments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// GET ALL COMMENTS
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// ADD NEW COMMENT
commentRouter.post("/:sightingId", (req, res, next) => {
    req.body.user = req.auth._id                            //tied to user who made the comment
    req.body.sighting = req.params.sightingId               //tied comment to issue commented on
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

// DELETE COMMENT
commentRouter.delete("/:commentId", (req, res, next) => {
    Comment.findOneAndDelete(
        {_id: req.params.commentId, user: req.auth._id},
        (err, deletedComment) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted comment: ${deletedComment.text}`)
        }
    )
})

// UPDATE COMMENT
commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findOneAndUpdate(
        {_id: req.params.commentId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

module.exports = commentRouter