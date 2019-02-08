const User = require('../models/user')

function indexRoute(req, res) {
  User
    .find()
    .populate({ path: 'user', select: 'name image' })
    .then(users => res.json(users) )
}

function createRoute(req, res) {
  User
    .create(req.body)
    .then(users => res.json(users))
    .then(users => res.status(201).json(users))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(req, res) {
  User
    .findById(req.params.id)
    .then(users => res.json(users))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute
}
