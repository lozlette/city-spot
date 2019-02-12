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
        url: `https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.SKIDDLE_KEY}&latitude=${lat}&longitude=${lng}&radius=5`,
        json: true,
        qs: { units: 'si' }
      })
    })
    .then(data => {
      return res.json(data)
    })
    .catch(next)
}








//   rp({
//     method: 'GET',
//     url: `https://www.skiddle.com/api/v1/events/?api_key=${process.env.SKIDDLE_KEY}`,
//     json: true,
//     qs: {
//       q: req.query.town
//     }
//   })
//     .then(data => {
//       return res.json(data)
//     })
//
//     .catch(next)
// }





module.exports = {
  index: indexRoute
}
