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

postSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'city'
})

postSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Post', postSchema)
