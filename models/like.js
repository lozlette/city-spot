const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.ObjectId, ref: 'Post'},
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  like: { type: Boolean }
})

module.exports = mongoose.model('Like', likeSchema)
