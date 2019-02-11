const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: 'Please enter a username', unique: 'Please enter a different username' },
  firstName: { type: String, required: 'Please enter your first name' },
  lastName: { type: String, required: 'Please enter your last name' },
  email: { type: String, required: 'Please enter your email', unique: 'This email has already been registered' },
  image: { type: String, required: 'Please add an image' },
  bio: { type: String, minlength: 1, maxlength: 200, required: 'Please add a short description of yourself' },
  password: { type: String, required: 'Please enter a password' },
  continent: { type: mongoose.Schema.ObjectId, ref: 'Continent' },
  gender: { type: String },
  verified: { type: Boolean, default: false }
})

userSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'user'
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
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    delete json.password
    return json
  }
})

module.exports = mongoose.model('User', userSchema)
