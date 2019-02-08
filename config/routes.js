const router = require('express').Router()

const continentController = require('../controllers/continents')
const cityController = require('../controllers/cities')
const userController = require('../controllers/users')
const postController = require('../controllers/posts')

// const secureRoute = ('../lib/secureRoute')
const authController = require('../controllers/auth')

router.post('/register', authController.register)
router.post('/login', authController.login)



router.get('/cities', cityController.index)

router.get('/cities/:id', cityController.show)
router.post('/cities/:id/posts', postController.postCreate)

router.get('/continents', continentController.index)

router.get('/continents/:id', continentController.show)

router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/:id', userController.show)

module.exports = router
