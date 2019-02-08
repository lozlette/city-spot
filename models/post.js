const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  food: [ { type: String } ],
  nightlife: { type: String },
  text: { type: String, maxlength: 200 },
  image: { type: String },
  rating: { type: Number }
},{
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
