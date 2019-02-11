const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, minlength: 10, maxlength: 200 }
}, {
  timestamps: true
})

const postSchema = new mongoose.Schema({
  city: { type: mongoose.Schema.ObjectId, ref: 'City' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: { type: String, required: true },
  caption: { type: String, required: true },
  comments: [commentSchema]
},{
  timestamps: true
})

postSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'post'
})

postSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Post', postSchema)
