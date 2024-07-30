const catchError = require('../utils/catchError')
const User = require('../models/User')

//!method to get all users form the db
const getAll = catchError(async (req, res) => {
  // Operaciones...
  const result = await User.findAll() //Select * from users
  return res.json(result)
})

//!method to create a new user
const create = catchError(async (req, res) => {
  const result = await User.create(req.body)
  return res.status(201).json(result)
})

//!method to get an user searching by id
const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await User.findByPk(id)
  if (!result) return res.status(404).json('User not found')
  return res.json(result)
})

//!method for delete an user searching by id
const destroy = catchError(async (req, res) => {
  const { id } = req.params
  const result = await User.destroy({ where: { id } })
  if (!result) return res.status(404).json('User not found')
  return res.sendStatus(204)
})

//!method for update an user searching by id
const update = catchError(async (req, res) => {
  const { id } = req.params
  const user = await User.update(req.body, { where: { id }, returning: true })

  if (user[0] === 0) return res.sendStatus(404)
  return res.status(200).json(user[1][0])
})

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update,
}
