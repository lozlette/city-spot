/* global api, describe, it, expect, beforeEach */

const User = require('../../models/user')
const { userData } = require('../mock_data')

const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

let user

describe('POST/login', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(record => {
        user = record
        done()
      })
  })

  it('should return a token and a message', done => {
    api
      .post('/api/login')
      .send(userData)
      .end((err, res) => {
        console.log(res.body)
        expect(res.body.token).to.exist
        expect(res.body.message).to.exist
        done()
      })
  })

  it('should return a valid token', done => {
    api
      .post('/api/login')
      .send(userData)
      .end((err, res) => {
        jwt.verify(res.body.token, secret, (err, payload) => {
          expect(err).to.not.exist
          expect(payload).to.exist
          done()
        })
      })
  })

  it('should have the correct payload', done => {
    api
      .post('/api/login')
      .send(userData)
      .end((err, res) => {
        jwt.verify(res.body.token, secret, (err, payload) => {
          expect(payload.sub).to.eq(user._id.toString())
          expect(payload.iat).to.exist
          expect(payload.exp).to.exist
          done()
        })
      })
  })

})

it('should return a 401 response if the user doesn\'t exist', done => {
  const badData = { email: 'bad@test.com', password: 'test' }

  api
    .post('/api/login')
    .send(badData)
    .end((err, res) => {
      expect(res.status).to.eq(401)
      done()
    })
})
