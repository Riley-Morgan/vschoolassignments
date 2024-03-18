const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

//Get comments by issue
commentRouter.get('/:issueId', (req, res, next) => {
    Comment.find({issue: req.params.issueId}, (err, comments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

//Get  all comments 
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

//Add new comment
commentRouter.post('/:issueId', (req, res, next) => {
    req.body.user = req.auth._id //link to user who posted the comment
    req.body.issue = req.params.issueId //link comment to issue
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

//Delete comment
commentRouter.delete('/:commentId', (req, res, next) => {
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

//Update comment 
commentRouter.put('/:commentId', (req, res, next) => {
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