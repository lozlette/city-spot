const mongoose = require('mongoose')

const continentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
},{
  id: false
})

continentSchema.virtual('cities', {
  ref: 'City',
  localField: '_id',
  foreignField: 'continent'
})

continentSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Continent', continentSchema)
