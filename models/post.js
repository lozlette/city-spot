const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: 'Characters length must be from 10-200', minlength: 10, maxlength: 200 }
}, {
  timestamps: true
})

const likeSchema = new mongoose.Schema({
  // post: { type: mongoose.Schema.ObjectId, ref: 'Post' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  like: { type: Boolean }
})

const postSchema = new mongoose.Schema({
  city: { type: mongoose.Schema.ObjectId, ref: 'City' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: { type: String, required: 'Please add an image'},
  caption: { type: String, required: 'Please add a caption' },
  comments: [commentSchema],
  likes: [likeSchema]
},{
  timestamps: true
})

// postSchema.virtual('likes', {
//   ref: 'Like',
//   localField: '_id',
//   foreignField: 'post'
// })
//
// postSchema.set('toJSON', {
//   virtuals: true,
//   transform(doc, json) {
//     delete json.__v
//     return json
//   }
// })

module.exports = mongoose.model('Post', postSchema)
