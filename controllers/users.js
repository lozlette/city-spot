const User = require('../models/user')

function indexRoute(req, res, next) {
  User
    .find()
    .then(users => res.json(users))
    .catch(next)
}

function createRoute(req, res, next) {
  User
    .create(req.body)
    .then(users => res.json(users))
    .then(users => res.status(201).json(users))
    .catch(next)
}

function updateRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(users => users.set(req.body))
    .then(users => users.save())
    .then(users => res.json(users))
    .catch(next)
}

function deleteRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(users => users.remove())
    .then(users => users.save())
    .then(res.json({message: 'User deleted'}))
    .catch(next)
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('posts')
    .then(users => res.json(users))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
