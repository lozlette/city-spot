// const Like = require('../models/like')
//
// function likeCreateRoute(req, res) {
//   // req.body.post = req.params.postId
//   req.body.user = req.currentUser
//   Like
//     .create(req.body)
//     .then(like => res.status(201).json(like))
// }
//
// function likeShowRoute(req, res) {
//   Like
//     .findById(req.params.likeId)
//     .then(like => res.json(like))
// }
//
// function likeIndexRoute(req, res) {
//   Like
//     .find()
//     .then(like => res.json(like))
// }
//
// module.exports = {
//   likeCreate: likeCreateRoute,
//   likeShow: likeShowRoute,
//   likeIndex: likeIndexRoute
// }
