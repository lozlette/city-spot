process.env.NODE_ENV = 'test'
process.env.PORT= 3000
process.env.MONGODB_URI = 'mongodb://localhost'

const chai = require('chai')
global.expect = chai.expect

const supertest = require('supertest')
const app = require('../index')
global.api = supertest(app)
