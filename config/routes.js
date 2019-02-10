const router = require('express').Router()

const continentController = require('../controllers/continents')
const cityController = require('../controllers/cities')
const userController = require('../controllers/users')
const postController = require('../controllers/posts')
const authController = require('../controllers/auth')
const likeController = require('../controllers/likes')
const secureRoute = require('../lib/secureRoute')

router.post('/register', authController.register)
router.post('/login', secureRoute, authController.login)

router.get('/cities', cityController.index)
router.get('/cities/:id', cityController.show)

router.post('/cities/:id/posts', secureRoute, postController.postCreate)
router.get('/cities/:id/posts', postController.postIndex)
router.get('/cities/:id/posts/:postId', postController.postShow)
router.delete('/cities/:id/posts/:postId', secureRoute, postController.postDelete)
router.put('/cities/:id/posts/:postId', secureRoute, postController.postUpdate)
router.post('/cities/:id/posts/:postId/comments', secureRoute, postController.commentCreate)

router.post('/cities/:id/posts/:postId/likes', likeController.likeCreate)
router.get('/cities/:id/posts/:postId/likes', likeController.likeIndex)

router.get('/continents', continentController.index)
router.get('/continents/:id', continentController.show)

router.get('/users', userController.index)
router.get('/users/:id', userController.show)
router.put('/users/:id', secureRoute, userController.update)
router.delete('/users/:id', secureRoute, userController.delete)

module.exports = router
