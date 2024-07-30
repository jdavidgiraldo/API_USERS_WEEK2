const {
  getAll,
  create,
  getOne,
  destroy,
  update,
} = require('../controllers/user.controllers')
const express = require('express')

const userRouter = express.Router()

//! STATICS ROUTES
userRouter.route('/').get(getAll).post(create) //-> users

//!DINAMICS ROUTES
userRouter
  .route('/:id') //! -> /users/:id
  .get(getOne)
  .delete(destroy)
  .put(update)

module.exports = userRouter