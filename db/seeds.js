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

        // --------------- EUROPE -----------------

        city11: City.create({
          name: 'London',
          imgae: 'https://zenartdesign.com/wp-content/uploads/2017/03/London-Skyline-800x800px.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city12: City.create({
          name: 'Berlin',
          imgae: 'https://blog.parkinn.com/wp-content/uploads/sites/7/2018/01/things-in-berlin-skyline.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city13: City.create({
          name: 'Rome',
          imgae: 'http://www.dearomatours.com/wp-content/uploads/alba-di-roma-2.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city14: City.create({
          name: 'Lisbon',
          imgae: 'https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/city-guides/lisbon.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city15: City.create({
          name: 'Madrid',
          imgae: 'https://www.tripsavvy.com/thmb/IFWk4WJn0e-pI59rzr3G1GyK9ZU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/madrid-skyline--gran-v-a-at-dusk-657153546-5a75dd69c5542e00373029b6.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city16: City.create({
          name: 'Paris',
          imgae: 'https://tunnelingonline.com/wp-content/uploads/2017/07/Paris-skyline.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city17: City.create({
          name: 'Amsterdam',
          imgae: 'https://s3.eu-central-1.amazonaws.com/locationscoutnet/images/2018-03/panoramic-view-on-amsterdam-skyline-netherlands_l.jpeg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city18: City.create({
          name: 'Athens',
          imgae: 'https://c1.staticflickr.com/5/4489/36786164663_f66eeaac8b_b.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city19: City.create({
          name: 'Barcelona',
          imgae: 'https://www.kimptonhotels.com/blog/wp-content/uploads/2018/09/Barcelona-Skyline.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),
        city20: City.create({
          name: 'Istanbul',
          imgae: 'https://indigodergisi.com/wp-content/uploads/2016/12/istanbul-gokdelenleri-elektrik-kesintisi-dogalgaz-kaos.jpg',
          continent: 'Europe',
          appearedIn: [data.continentEurope]
        }),

        // -----------  NORTH AMERICA ----------------

        city21: City.create({
          name: 'New York',
          imgae: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/brooklyn-bridge-and-lower-manhattan-skyline-new-york-city-usa-matteo-colombo.jpg',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        }),
        city22: City.create({
          name: 'Montreal',
          imgae: 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/37455/SITours/montreal-attraction-pass-in-montreal-340281.jpg',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        }),
        city23: City.create({
          name: 'Los Angeles',
          imgae: 'http://www.edwinbeckenbach.com/images/EHB0830_640.jpg',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        }),
        city24: City.create({
          name: 'Miami',
          imgae: 'https://www.muralswallpaper.com/app/uploads/miami-skyline-landscape-plain.jpg',
          continent: 'Europe',
          appearedIn: [data.continentNorthAmerica]
        }),
        city25: City.create({
          name: 'Cancun',
          imgae: 'https://gaytravel-destinations.s3.amazonaws.com/32030/cancun-city-life-skyline__large.jpg',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        }),
        city26: City.create({
          name: 'Vancouver',
          imgae: 'http://athenaposters.ca/wp-content/uploads/2017/10/2390-0740-Vancouver-British-Columbia-Skyline.jpg',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        }),
        city27: City.create({
          name: 'Las Vegas',
          imgae: 'https://static1.squarespace.com/static/5813cddb8419c25c3b42eacd/593d9408cd0f68786f401768/5970d167d1758e894e5c72be/1529357243880/?format=1000w',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        }),
        city28: City.create({
          name: 'San Francisco',
          imgae: 'https://media.gettyimages.com/photos/golden-gate-bridge-and-san-francisco-skyline-picture-id184929400?b=1&k=6&m=184929400&s=612x612&w=0&h=SJ06lv1WS10RLQXgFj1VP6zGf2H8KIxjQEHxA5OC4xo=',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        }),
        city29: City.create({
          name: 'Panama',
          imgae: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EQ8Uu6D/panama-city-skyline-timelapse-from-day-to-night-zoom-out_h1hgtmydl_thumbnail-full06.png',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        }),
        city30: City.create({
          name: 'Puerto Rico',
          imgae: 'https://cdn.travelpulse.com/images/c0aaedf4-a957-df11-b491-006073e71405/a4a014c3-e469-4ef8-bd07-32a9fdf7d086/630x355.jpeg',
          continent: 'North America',
          appearedIn: [data.continentNorthAmerica]
        })

        // -------------- SOUTH AMERICA -------------

      })
    })




    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
