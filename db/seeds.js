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
        continentAfrica: Continent.create({
          name: 'Africa',
          image: 'https://www.uticaphoenix.net/wp-content/uploads/2017/05/05-18-2017-clipart-africa.png'
        }),
        continentEurope: Continent.create({
          name: 'Europe',
          image: 'http://i.imgur.com/dPidNXr.jpg'
        }),
        continentNorthAmerica: Continent.create({
          name: 'North America',
          image: 'https://i.pinimg.com/originals/fe/59/ba/fe59ba287b112557dc19fa0d9e997659.png'
        }),
        continentSouthAmerica: Continent.create({
          name: 'South America',
          image: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Flags_south_america.png'
        }),
        continentOceania: Continent.create({
          name: 'Oceania',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Map_of_Oceania_with_flags.svg/1200px-Map_of_Oceania_with_flags.svg.png'
        }),
        continentAsia: Continent.create({
          name: 'Asia',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Map_of_Asia_with_flags.svg/2000px-Map_of_Asia_with_flags.svg.png'
        }),
        continentAntartica: Continent.create({
          name: 'Antartica',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg/220px-Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg.png'
        })
      })
    })
    .then(data => {
      return Promise.props({
        city1: City.create({
          name: 'Cape Town',
          imgae: 'http://www.travelstart.co.za/blog/wp-content/uploads/2018/05/main-best-time-to-visit-cape-town.jpg',
          continent: 'Africa',
          appearedIn: [data.continentAfrica]
        }),
        city2: City.create({
          name: 'Nairobi',
          imgae: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/17/singa.jpg',
          continent: 'Africa',
          appearedIn: [data.continentAfrica]
      }),
      city3: City.create({
        name: 'Accra',
        imgae: 'https://i1.wp.com/theleidener.com/wp-content/uploads/2017/04/accra1.jpg?ssl=1',
        continent: 'Africa',
        appearedIn: [data.continentAfrica]
      }),
      city4: City.create({
        name: 'Libreville',
        imgae: 'http://www.travelmagma.com/uploads/images/0_319.jpg',
        continent: 'Africa',
        appearedIn: [data.continentAfrica]
      }),
      city5: City.create({
        name: 'Johannesburg',
        imgae: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Johannesburg_view_topofCC_03.jpg/220px-Johannesburg_view_topofCC_03.jpg',
        continent: 'Africa',
        appearedIn: [data.continentAfrica]
      }),
      city6: City.create({
        name: 'Marrakesh',
        imgae: 'https://timedotcom.files.wordpress.com/2016/03/160314_tra_intl_marrakesh2.jpg',
        continent: 'Africa',
        appearedIn: [data.continentAfrica]
      }),
      city7: City.create({
        name: 'Cairo',
        imgae: 'https://frontera.net/wp-content/uploads/2017/01/Egypt-1-1-1-1-1-1-1-2-1.jpg',
        continent: 'Africa',
        appearedIn: [data.continentAfrica]
      }),
      city8: City.create({
        name: 'Lagos',
        imgae: 'https://i1.wp.com/estateintel.com/wp-content/uploads/2017/06/DSC06402.jpg?resize=1000%2C480&ssl=1',
        continent: 'Africa',
        appearedIn: [data.continentAfrica]
      }),
      city9: City.create({
        name: 'Giza',
        imgae: 'https://cdn.civitatis.com/egipto/el-cairo/galeria/giza.jpg',
        continent: 'Africa',
        appearedIn: [data.continentAfrica]
      }),
      city10: City.create({
        name: 'Fes',
        imgae: 'https://c1.staticflickr.com/5/4284/35001088050_52fcd1cb66_b.jpg',
        continent: 'Africa',
        appearedIn: [data.continentAfrica]
      }),




    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
