const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  bio: { type: String, maxlength: 200, required: true },
  password: { type: String, required: true },
  continent: { type: mongoose.Schema.ObjectId, ref: 'Continent' },
  gender: { type: String },
  verified: { type: Boolean, default: false }
})

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmtion(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPasswordMatch(next){
  if(
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }

  next()

})

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }

  next()

})

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password
    return json
  }
})

module.exports = mongoose.model('User', userSchema)
