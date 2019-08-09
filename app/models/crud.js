const mongoose = require('mongoose')

const crudSchema = new mongoose.Schema({
  expression: {
    type: String,
    default: 'Home'
  },
  answer: {
    type: String,
    default: 'Default msg'
  },
  value: Number
})

module.exports = mongoose.model('crud', crudSchema)
