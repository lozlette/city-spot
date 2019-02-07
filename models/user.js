const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  image: {type: String},
  bio: {type: String, maxlength: 100, required: true},
  password: { type: String, required: true }
})
module.exports = mongoose.model('User', userSchema)
