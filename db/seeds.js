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
          image: 'http://www.travelstart.co.za/blog/wp-content/uploads/2018/05/main-best-time-to-visit-cape-town.jpg',
          continent: data.continentAfrica
        }),
        city2: City.create({
          name: 'Nairobi',
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/17/singa.jpg',
          continent: data.continentAfrica
      }),
      city3: City.create({
        name: 'Accra',
        image: 'https://i1.wp.com/theleidener.com/wp-content/uploads/2017/04/accra1.jpg?ssl=1',
        continent: data.continentAfrica
      }),
      city4: City.create({
        name: 'Libreville',
        image: 'http://www.travelmagma.com/uploads/images/0_319.jpg',
        continent: data.continentAfrica
      }),
      city5: City.create({
        name: 'Johannesburg',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Johannesburg_view_topofCC_03.jpg/220px-Johannesburg_view_topofCC_03.jpg',
        continent: data.continentAfrica
      }),
      city6: City.create({
        name: 'Marrakesh',
        image: 'https://timedotcom.files.wordpress.com/2016/03/160314_tra_intl_marrakesh2.jpg',
        continent: data.continentAfrica
      }),
      city7: City.create({
        name: 'Cairo',
        image: 'https://frontera.net/wp-content/uploads/2017/01/Egypt-1-1-1-1-1-1-1-2-1.jpg',
        continent: data.continentAfrica
      }),
      city8: City.create({
        name: 'Lagos',
        image: 'https://i1.wp.com/estateintel.com/wp-content/uploads/2017/06/DSC06402.jpg?resize=1000%2C480&ssl=1',
        continent: data.continentAfrica
      }),
      city9: City.create({
        name: 'Giza',
        image: 'https://cdn.civitatis.com/egipto/el-cairo/galeria/giza.jpg',
        continent: data.continentAfrica
      }),
      city10: City.create({
        name: 'Fes',
        image: 'https://c1.staticflickr.com/5/4284/35001088050_52fcd1cb66_b.jpg',
        continent: data.continentAfrica
      }),

// --------------- EUROPE -----------------

        city11: City.create({
          name: 'London',
          image: 'https://zenartdesign.com/wp-content/uploads/2017/03/London-Skyline-800x800px.jpg',
          continent: data.continentEurope
        }),
        city12: City.create({
          name: 'Berlin',
          image: 'https://blog.parkinn.com/wp-content/uploads/sites/7/2018/01/things-in-berlin-skyline.jpg',
          continent: data.continentEurope
        }),
        city13: City.create({
          name: 'Rome',
          image: 'http://www.dearomatours.com/wp-content/uploads/alba-di-roma-2.jpg',
          continent: data.continentEurope
        }),
        city14: City.create({
          name: 'Lisbon',
          image: 'https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/city-guides/lisbon.jpg',
          continent: data.continentEurope
        }),
        city15: City.create({
          name: 'Madrid',
          image: 'https://www.tripsavvy.com/thmb/IFWk4WJn0e-pI59rzr3G1GyK9ZU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/madrid-skyline--gran-v-a-at-dusk-657153546-5a75dd69c5542e00373029b6.jpg',
          continent: data.continentEurope
        }),
        city16: City.create({
          name: 'Paris',
          image: 'https://tunnelingonline.com/wp-content/uploads/2017/07/Paris-skyline.jpg',
          continent: data.continentEurope
        }),
        city17: City.create({
          name: 'Amsterdam',
          image: 'https://s3.eu-central-1.amazonaws.com/locationscoutnet/images/2018-03/panoramic-view-on-amsterdam-skyline-netherlands_l.jpeg',
          continent: data.continentEurope
        }),
        city18: City.create({
          name: 'Athens',
          image: 'https://c1.staticflickr.com/5/4489/36786164663_f66eeaac8b_b.jpg',
          continent: data.continentEurope
        }),
        city19: City.create({
          name: 'Barcelona',
          image: 'https://www.kimptonhotels.com/blog/wp-content/uploads/2018/09/Barcelona-Skyline.jpg',
          continent: data.continentEurope
        }),
        city20: City.create({
          name: 'Istanbul',
          image: 'https://indigodergisi.com/wp-content/uploads/2016/12/istanbul-gokdelenleri-elektrik-kesintisi-dogalgaz-kaos.jpg',
          continent: data.continentEurope
        })

      })
    })




    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
