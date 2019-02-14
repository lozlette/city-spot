require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const errorHandler = require('./lib/errorHandler')
const routes = require('./config/routes')
mongoose.plugin(require('mongoose-unique-validator'))


const app = express()
app.use(express.static(`${__dirname}/dist`))

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use('/api', routes)
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Up and running on port ${process.env.PORT}`))

module.exports = app
