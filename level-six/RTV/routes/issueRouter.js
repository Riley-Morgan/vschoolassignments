const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

//Get ALL Issues
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Get Issues by user NOT USER ID
issueRouter.get('/user', (req, res, next) => {
    Issue.find({user: req.auth._id}, (err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Add new Issue
issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id       //user who is creating the issue
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

//Delete Issue
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete(
        {_id: req.params.issueId, user: req.auth._id}, // only the user that made the issue can delete it
        (err, deletedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
        }
    )
})

//Update Issue
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.auth._id}, // only the user that made the issue can edit it
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

module.exports = issueRouter