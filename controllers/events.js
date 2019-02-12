const express = require('express')
const rp = require('request-promise')
const app = express()

app.use(express.static(`${__dirname}/dist`))

function indexRoute(req, res, next){
  rp({
    method: 'GET',
    url: `https://www.skiddle.com/api/v1/events/?api_key=${process.env.SKIDDLE_KEY}`,
    json: true,
    qs: {
      q: req.query.town
    }
  })
    .then(data => {
      return res.json(data)
    })

    .catch(next)
}





module.exports = {
  index: indexRoute
}
