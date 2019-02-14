const Post = require('../models/post')

function postIndexRoute(req, res, next) {
  Post
    .find()
    .populate('likes')
    .then(post => res.json(post))
    .catch(next)
}

function allPostIndexRoute(req, res, next) {
  Post
    .find()
    .populate({path: 'user', select: 'username'})
    .populate({path: 'city', select: 'name'})
    .then(post => res.json(post))
    .catch(next)
}

function postCreateRoute(req, res, next) {
  req.body.city = req.params.id
  req.body.user = req.currentUser
  Post
    .create(req.body)
    .then(city => res.status(201).json(city))
    .catch(next)
}

function postShowRoute(req, res, next) {
  Post
    .findById(req.params.postId)
    // .populate('user comments.user')
    .populate('user likes.user')
    // .populate([{path: 'like'}])
    .populate({ path: 'city', select: 'name' })
    .then(post => res.json(post))
    .catch(next)
}

function postUpdateRoute(req, res, next) {
  Post
    .findById(req.params.postId)
    .then(post => post.set(req.body))
    .then(post => post.save())
    .then(post => res.json(post))
    .catch(next)
}

function postDeleteRoute(req, res, next) {
  Post
    .findById(req.params.postId)
    .then(post => post.remove())
    .then(post => post.save())
    .then(res.json({ message: 'Post deleted' }))
    .catch(next)
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Post
    .findById(req.params.postId)
    .then(post => {
      post.comments.push(req.body)
      return post.save()
    })
    .then(post => res.status(201).json(post))
    .catch(next)
}

function commentUpdateRoute(req, res, next) {
  Post
    .findById(req.params.postId)
    .then(post => {
      const comment = post.comments.id(req.params.commentId)
      comment.set(req.body)
      return post.save()
    })
    .then(post => res.json(post))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Post
    .findById(req.params.postId)
    .then(post =>  {
      const comment = post.comments.id(req.params.commentId)
      comment.remove()
      return post.save()
    })
    .then(res.json({ message: 'Comment deleted' }))
    .catch(next)
}

function likeDeleteRoute(req, res, next) {
  Post
    .findById(req.params.postId)
    .then(post =>  {
      const like = post.likes.id(req.params.likeId)
      like.remove()
      return post.save()
    })
    .then(res.json({ message: 'Like deleted' }))
    .catch(next)
}

function likeCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Post
    .findById(req.params.postId)
    .then(post => {
      post.likes.push(req.body)
      return post.save()
    })
    .then(post => res.status(201).json(post))
    .catch(next)
}



function popularPostRoute(req, res, next) {
  Post
    .find()
    .populate({path: 'city', select: 'name'})
    .populate({path: 'user', select: 'username'})
    .then(posts => {
      return posts.sort(function(postA, postB){
        return postB.likes.length - postA.likes.length
      })
    })
    .then(arr => arr.slice(0, 10) || arr)
    .then(arr => res.status(200).json(arr))
    .catch(next)
}

// function likeIndexRoute(req, res, next) {
//   req.body.user = req.currentUser
//   Post
//     .find(req.params.postId)
//     .then(post => {
//       const like = post.comments.id(req.params.likeId)
//       return like
//     })
//     .then(post => res.status(201).json(post))
//     .catch(next)
// }

module.exports = {
  allPostIndex: allPostIndexRoute,
  postCreate: postCreateRoute,
  postShow: postShowRoute,
  postIndex: postIndexRoute,
  postUpdate: postUpdateRoute,
  postDelete: postDeleteRoute,
  popularPostRoute: popularPostRoute,
  commentCreate: commentCreateRoute,
  commentUpdate: commentUpdateRoute,
  commentDelete: commentDeleteRoute,
  likeCreate: likeCreateRoute,
  likeDelete: likeDeleteRoute
}
