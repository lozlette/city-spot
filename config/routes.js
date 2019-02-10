const router = require('express').Router()

const continentController = require('../controllers/continents')
const cityController = require('../controllers/cities')
const userController = require('../controllers/users')
const postController = require('../controllers/posts')
const authController = require('../controllers/auth')
// const secureRoute = require('../lib/secureRoute')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/cities', cityController.index)
router.get('/cities/:id', cityController.show)

router.post('/cities/:id/posts', postController.postCreate)
router.get('/cities/:id/posts', postController.postIndex)
router.get('/cities/:id/posts/:postId', postController.postShow)
router.delete('/cities/:id/posts/:postId', postController.postDelete)
router.put('/cities/:id/posts/:postId', postController.postUpdate)

router.post('/cities/:id/posts/:postId/comments', postController.commentCreate)

router.get('/continents', continentController.index)
router.get('/continents/:id', continentController.show)

router.get('/users', userController.index)
router.get('/users/:id', userController.show)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

module.exports = router
