const Post = require('../models/post')

function postIndexRoute(req, res) {
  Post
    .find()
    .then(post => res.json(post))
}

function postShowRoute(req, res) {
  Post
    .findById(req.params.id)
    .then(post => res.status(201).json(post))
}

function postCreateRoute(req, res) {
  req.body.city = req.params.id
  Post
    .create(req.body)
    .then(city => res.status(201).json(city))
    .catch(err => res.status(422).json(err.errors))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Post
    .findById(req.params.postId)
    .then(post => {
      post.comments.push(req.body)
      return post.save()
    })
    .then(post => res.status(201).json(post))
    .catch(err => res.status(422).json(err.errors))
}

function commentDeleteRoute(req, res) {
  Post
    .findById(req.params.postId)
    .then(post => {
      const comment = post.comments.id(req.params.commentsId)
      return comment.remove()
    })
    .then(post => res.json(post))
}

module.exports = {
  postCreate: postCreateRoute,
  postShow: postShowRoute,
  postIndex: postIndexRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
