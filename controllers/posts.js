const Post = require('../models/post')

function postIndexRoute(req, res) {
  Post
    .find()
    .then(post => res.json(post))
}

function postShowRoute(req, res) {
  Post
    .findById(req.params.postId)
    .populate('user comments.user')
    .then(post => res.status(201).json(post))
}

function postCreateRoute(req, res) {
  req.body.city = req.params.id
  Post
    .create(req.body)
    .then(city => res.status(201).json(city))
}

function postDeleteRoute(req, res) {
  Post
    .findById(req.params.postId)
    .then(post => post.remove())
    .then(post => post.save())
    .then(res.json({ message: 'Post deleted'}))
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
}

module.exports = {
  postCreate: postCreateRoute,
  postShow: postShowRoute,
  postIndex: postIndexRoute,
  postDelete: postDeleteRoute,
  commentCreate: commentCreateRoute
}
