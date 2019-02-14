const express = require('express')
const rp = require('request-promise')
const app = express()

app.use(express.static(`${__dirname}/dist`))

function indexRoute(req, res, next){
  rp({
    method: 'GET',
    url: 'https://api.opencagedata.com/geocode/v1/json',
    qs: {
      key: process.env.OPEN_CAGE_KEY,
      q: req.query.city
    },
    json: true
  })
    .then(response => {
      console.log(response, 'THE RESPONSE!!!!!!!')
      const { lat, lng } = response.results[0].geometry
      return rp({
        method: 'GET',
        url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=-${lng}&start=20&radius=1000&sort=real_distance`,
        qs: {
          // key: process.env.ZOMATO_KEY,
          units: 'si'
        },
        headers: {
          'user-key': process.env.ZOMATO_KEY
        },
        json: true
      })
    })
    .then(data => {
      return res.json(data)
    })
    .catch(next)
}

module.exports = {
  index: indexRoute
}
