const User = require('../models/user')

function indexRoute(req, res) {
  User
    .find()
    .then(users => res.json(users) )
}

function createRoute(req, res) {
  User
    .create(req.body)
    .then(users => res.json(users))
    .then(users => res.status(201).json(users))
}

function updateRoute(req, res) {
  User
    .findById(req.params.id)
    .then(users => users.set(req.body))
    .then(users => users.save())
    .then(users => res.json(users))
}

function deleteRoute(req, res) {
  User
    .findById(req.params.id)
    .then(users => users.remove())
    .then(users => users.save())
    .then(res.json({message: 'User deleted'}))
}

function showRoute(req, res) {
  User
    .findById(req.params.id)
    .then(users => res.json(users))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
