/*global describe, it, expect, api, before */

const City = require('../models/city')


describe('cities INDEX', () => {


  before
  it('should return a 200 response', (done) => {
    api.get('/api/cities')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return te correct data', (done) => {
    api.get('/api/cities')
      .end((err, res) => {
        res.body.forEach(city => {
          expect(city._id).to.exist
        })
        done()
      })
  })

})
