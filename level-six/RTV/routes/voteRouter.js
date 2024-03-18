const express = require('express')
const Issue = require('../models/issue.js')
const voteRouter = express.Router()

//UPVOTE ROUTE
voteRouter.put('/upVote/:issueId', ( req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId},
        {
            $addToSet: { likedUsers: req.auth._id},
            $pull: { dislikedUsers: req.auth._id}
        },
        { new: true },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

//DOWNVOTE ROUTE
voteRouter.put('/downVote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId},
        {
            $addToSet: { dislikedUsers: req.auth._id},
            $pull: { likedUsers: req.auth._id}
        },
        { new: true },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

module.exports = voteRouter