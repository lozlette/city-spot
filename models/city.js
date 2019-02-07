const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  hotSpots: {type: String, maxlength: 200},
  food: {type: String},
  nightlife: {type: String},
  text: {type: String, maxlength: 200},
  image: {type: String},
  rating: {type: String}
},{
  timestamps: true
})

//multiple choice
//yes/no
//preset options

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  continent: { type: mongoose.Schema.ObjectId, ref: 'Continent', required: true },
  post: [postSchema]
})


module.exports = mongoose.model('City', citySchema)
