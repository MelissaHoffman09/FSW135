const express = require('express');
const User = require('../models/user.js');
const userRouter = express.Router();

// GET ALL
authRouter.get("/", (req, res, next) => {
    User.find((err, users) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

// GET, UPDATE, DELETE ONE
authRouter.route("/:username")
.get((req, res, next) => {
    User.findOne({username: req.params.username},
        {username, memberSince},
        (err, user) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(user)
        })
})

.put((req, res, next) => {
    User.findOneAndUpdate({username: req.params.username, user: req.user._id },
        req.body,
        {new: true},
        (err, updatedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
        })
})

.delete((req, res, next) => {
    User.findOneAndDelete({username: req.params.username, user: req.user._id },
        (err, deletedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`${deletedUser.username} has been deleted`)
        })
})
module.exports = userRouter;