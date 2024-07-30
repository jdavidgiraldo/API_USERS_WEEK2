//!a model called User -> a table called users

//The model created here is used to bring, create, update and delete records from a user database.

//? model: User ---orm:sequelize-- -> table: users

const { DataTypes } = require('sequelize')
const sequelize = require('../utils/connection')

//!creating a model
const User = sequelize.define('user', {
  //!users
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, //! it means it has to be a diferente email for every user
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
})

module.exports = User
