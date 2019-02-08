const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  continent: { type: mongoose.Schema.ObjectId, ref: 'Continent', required: true },
  population: { type: Number },
  currency: { type: Number},
  lat: {type: Number},
  lng: {type: Number},
  posts: [{ type: mongoose.Schema.ObjectId, ref: 'Post'}]
})

module.exports = mongoose.model('City', citySchema)
