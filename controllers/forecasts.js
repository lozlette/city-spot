const rp = require('request-promise')
const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/dist`))

function indexRoute(req, res, next) {
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
      const { lat, lng } = response.results[0].geometry
      return rp({
        method: 'GET',
        url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${lat},${lng}`,
        json: true,
        qs: { units: 'si' }
      })
    })
    .then(response => {
      const forecast = response.daily
      forecast.data = forecast.data.map(day => ({
        time: day.time,
        summary: day.summary,
        icon: day.icon,
        temperatureHigh: day.temperatureHigh,
        temperatureLow: day.temperatureLow
      }))

      return res.json(forecast)
    })
    .catch(next)
}


module.exports = {
  index: indexRoute
}
