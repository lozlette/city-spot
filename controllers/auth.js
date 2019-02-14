const User = require('../models/user')
const jwt = require('jsonwebtoken')
const mailer = require('../lib/mailer')

function registerRoute( req, res, next ) {
  User.create(req.body)
    .then(user => mailer.sendRegistrationEmail(user))
    .then(() => res.status(201).json({ message: 'Registration completed' }))
    .catch(next)
}

function loginRoute( req, res ) {
  User.findOne({ email: req.body.email, verified: true })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Invalid username or password. Please try again' })
      }

      const payload = { sub: user._id }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })

      res.json({
        token,
        message: `Welcome back ${user.username}!`

      })
    })
}

//fnd user and send email to user /confirmpassword

function passwordReset( req, res, next ) {
  User.findOne({ email: req.body.email, verified: true })
    .then(user => {
      if(!user) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      // user has been found
      // send an email
      mailer.sendResetPassword(user)
    })
    .then(() => res.json({ message: 'Email has been succesfully sent to your address'}))
    .catch(next)
}


function confirmRoute(req, res, next) {
  User.findOne({ confirmCode: req.params.code })
    .then(user => {
      if(!user) return res.status(401).json({ message: 'Unauthorized' })

      user.verified = true
      return user.save()
    })
    .then(() => res.json({ message: 'Account verified' }))
    .catch(next)
}


module.exports = {
  register: registerRoute,
  login: loginRoute,
  passwordReset: passwordReset,
  confirm: confirmRoute
}
