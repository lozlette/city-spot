const Post = require('../models/post')

function postCreateRoute(req, res) {
  req.body.user = req.currentUser
  Post
    .create(req.body)
    .then(city => res.status(201).json(city))
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  postCreate: postCreateRoute
}
