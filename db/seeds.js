require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Continent = require('../models/continent')
const City = require('../models/City')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        continent: Continent.create({
          name: 'Africa',
          image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg'
        })
      })
    })
    .then(data => {
      return City.create({
        name: 'Cairo',
        image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg',
        continent: data.continent
      })
    })
    .then(data => {
      return City.create({
        name: 'Asmara',
        image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg',
        continent: data.continent
      })
    })
    .then(() => {
      return Promise.props({
        continent: Continent.create({
          name: 'Asia',
          image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg'
        })
      })
        .then(data => {
          return City.create({
            name: 'Singapore',
            image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg',
            continent: data.continent
          })
        })
    })
    .then(() => {
      return Promise.props({
        continent: Continent.create({
          name: 'Europe',
          image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg'
        })
      })
    })
    .then(() => {
      return Promise.props({
        continent: Continent.create({
          name: 'North America',
          image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg'
        })
      })
    })
    .then(() => {
      return Promise.props({
        continent: Continent.create({
          name: 'South America',
          image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg'
        })
      })
    })
    .then(() => {
      return Promise.props({
        continent: Continent.create({
          name: 'Oceana',
          image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg'
        })
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
