const router = require('express').Router()

const continentController = require('../controllers/continents')
const cityController = require('../controllers/cities')
const userController = require('../controllers/users')
// const secureRoute = ('../lib/secureRoute')
const authController = require('../controllers/auth')

router.post('/register', authController.register)
router.post('/login', authController.login)


router.get('/cities', cityController.index)

router.get('/cities/:id', cityController.show)

router.get('/continents', continentController.index)

router.get('/continents/:id', continentController.show)

router.get('/users', userController.index)

module.exports = router
