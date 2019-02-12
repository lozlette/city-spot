/* global api, describe, it, expect, beforeEach */

const User = require('../../models/user')
const { userData } = require('../mock_data')

describe('POST /register', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => done())
  })

  it('should return a 422 response if the passwords don\'t match', done => {
    const badData = Object.assign({}, userData, { password: 'bad' })
    api
      .post('/api/register')
      .send(badData)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })
})
