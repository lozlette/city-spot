require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const errorHandler = require('./lib/errorHandler')

const app = express()
const routes = require('./config/routes')

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use('/api', routes)

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Up and running on port ${process.env.PORT}`))
