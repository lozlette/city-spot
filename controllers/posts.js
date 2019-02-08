const Post = require('../models/post')

function postIndexRoute(req, res) {
  Post
    .find()
    .then(post => res.json(post))
}

function postShowRoute(req, res) {
  req.body.user = req.currentUser
  Post
    .findById(req.params.id)
    .then(post => res.status(201).json(post))
}

function postCreateRoute(req, res) {
  req.body.user = req.currentUser
  Post
    .create(req.body)
    .then(city => res.status(201).json(city))
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  postCreate: postCreateRoute,
  postShow: postShowRoute,
  postIndex: postIndexRoute
}
