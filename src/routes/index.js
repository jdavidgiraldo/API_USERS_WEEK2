const express = require('express')
const userRouter = require('./user.router')
const router = express.Router()

// route to use
router.use('/users', userRouter)

module.exports = router;
