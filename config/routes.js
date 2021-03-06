const router = require('express').Router()

const continentController = require('../controllers/continents')
const cityController = require('../controllers/cities')
const userController = require('../controllers/users')
const postController = require('../controllers/posts')
const authController = require('../controllers/auth')
// const likeController = require('../controllers/likes')
const secureRoute = require('../lib/secureRoute')


// const passwordReset = require('../lib/passwordReset')

const forecastController = require('../controllers/forecasts')
const eventsController = require('../controllers/events')
const restaurantsController = require('../controllers/restaurants')


router.post('/register', authController.register)
router.post('/login', authController.login)

router.post('/resetpassword/', authController.passwordReset) // entering Email

router.get('/confirm/:code', authController.confirm) //  confirm code  via email

router.get('/cities', cityController.index)
router.get('/cities/:id', cityController.show)



router.post('/cities/:id/posts', secureRoute, postController.postCreate)
router.get('/cities/:id/posts', postController.postIndex)
router.get('/cities/:id/posts/:postId', postController.postShow)
router.delete('/cities/:id/posts/:postId', postController.postDelete)
router.put('/cities/:id/posts/:postId', secureRoute, postController.postUpdate)

router.post('/cities/:id/posts/:postId/comments', secureRoute, postController.commentCreate)
router.put('/cities/:id/posts/:postId/comments/:commentId', postController.commentUpdate)
router.delete('/cities/:id/posts/:postId/comments/:commentId', postController.commentDelete)

router.post('/cities/:id/posts/:postId/likes', postController.likeCreate)


router.get('/popularposts', postController.popularPostRoute)

router.delete('/cities/:id/posts/:postId/likes/:likeId', postController.likeDelete)

router.get('/posts', postController.allPostIndex)

router.get('/continents', continentController.index)
router.get('/continents/:id', continentController.show)

router.get('/users', userController.index)
router.get('/users/:id', userController.show)
router.put('/users/:id', userController.update)
router.delete('/users/:id', secureRoute, userController.delete)

router.get('/forecast', forecastController.index)
router.get('/events', eventsController.index)
router.get('/restaurants', restaurantsController.index)

module.exports = router
