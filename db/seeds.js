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

  // ------------- AFRICA -----------------

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
        }),


        // --------------- NORTH AMERICA -----------------

        city31: City.create({
          name: 'New York',
          image: 'https://thenypost.files.wordpress.com/2014/11/future_midtown_skyline_2.jpg?quality=90&strip=all&w=978&h=652&crop=1',
          continent: data.continentNorthAmerica
        }),
        city32: City.create({
          name: 'Montreal',
          image: 'https://www.mcgill.ca/undergraduate-admissions/files/undergraduate-admissions/experience_montreal.jpg',
          continent: data.continentNorthAmerica
        }),
        city33: City.create({
          name: 'Cancun',
          image: 'https://ahoycruises.co.uk/images/stories/flexicontent/ships/mediaman/l_miami-usa-port-skyline-2-ahoy-500.jpg',
          continent: data.continentNorthAmerica
        }),
        city34: City.create({
          name: 'Vancouver',
          image: 'http://athenaposters.ca/wp-content/uploads/2017/10/2390-0740-Vancouver-British-Columbia-Skyline.jpg',
          continent: data.continentNorthAmerica
        }),
        city35: City.create({
          name: 'San Francisco',
          image: 'https://i.ytimg.com/vi/C9J1p6kO9VA/maxresdefault.jpg',
          continent: data.continentNorthAmerica
        }),
        city36: City.create({
          name: 'Las Vegas',
          image: 'https://static1.squarespace.com/static/5813cddb8419c25c3b42eacd/593d9408cd0f68786f401768/5970d167d1758e894e5c72be/1529357243880/?format=1000w',
          continent: data.continentNorthAmerica
        }),
        city37: City.create({
          name: 'Miami',
          image: 'http://sfns.online/wp-content/uploads/2018/10/miami.jpg',
          continent: data.continentNorthAmerica
        }),
        city38: City.create({
          name: 'Boston',
          image: 'https://cdn.shopify.com/s/files/1/1000/8436/products/boston_2000x.jpg?v=1521521847',
          continent: data.continentNorthAmerica
        }),
        city39: City.create({
          name: 'Chicago',
          image: 'https://images.adsttc.com/media/images/56a1/90b0/e58e/ceb1/5000/02c7/newsletter/shutterstock_143073025.jpg?1453428902',
          continent: data.continentNorthAmerica
        }),
        city40: City.create({
          name: 'Toronto',
          image: 'https://img.theculturetrip.com/840x440/smart//wp-content/uploads/2017/03/1024px-toronto_-_on_-_toronto_skyline2.jpg',
          continent: data.continentNorthAmerica
        }),


        // --------------- SOUTH AMERICA -----------------

        city41: City.create({
          name: 'Buenos Aires',
          image: 'https://i1.wp.com/www.thebubble.com/wp-content/uploads/La-Rueda-Buenos-Aires.jpg?resize=735%2C395&ssl=1',
          continent: data.continentSouthAmerica
        }),
        city42: City.create({
          name: 'Lima',
          image: 'https://cdn-04.independent.ie/life/travel/article34823398.ece/05e10/AUTOCROP/w620/lima.jpg',
          continent: data.continentSouthAmerica
        }),
        city43: City.create({
          name: 'Rio de Janeiro',
          image: 'https://data.jigsawpuzzle.co.uk/clementoni.8/rio-de-janeiro-jigsaw-puzzle-500-pieces.60880-1.fs.jpg',
          continent: data.continentSouthAmerica
        }),
        city44: City.create({
          name: 'La Paz',
          image: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/09/Intrepid-Travel-bolivia_la-paz_city-of-peace.jpg',
          continent: data.continentSouthAmerica
        }),
        city45: City.create({
          name: 'Quito',
          image: 'https://www.blacktomato.com/wp-content/uploads/2012/09/Basilica-del-Voto-Quito_115.jpg',
          continent: data.continentSouthAmerica
        }),
        city46: City.create({
          name: 'Porto Alegre',
          image: 'http://martinfletcher.files.wordpress.com/2013/02/porto-alegre-2.jpg',
          continent: data.continentSouthAmerica
        }),
        city47: City.create({
          name: 'Barranquilla',
          image: 'https://www.arrecifetours.com/gestor_web/gestor_pv/imgpv_pv/142/142a_hb_58adb5b5a2d73.jpg',
          continent: data.continentSouthAmerica
        }),
        city48: City.create({
          name: 'Ushuaia',
          image: 'https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/ushuaia-to-argentina-1519295860-1000X561.jpg',
          continent: data.continentSouthAmerica
        }),
        city49: City.create({
          name: 'Fortaleza',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/FORTALEZA%2C_BRAZIL.jpg',
          continent: data.continentSouthAmerica
        }),
        city50: City.create({
          name: 'Arequipa',
          image: 'https://www.roadaffair.com/wp-content/uploads/2017/10/sunrise-cusco-peru-shutterstock_354971309.jpg',
          continent: data.continentSouthAmerica
        }),


        // --------------- ASIA -----------------

        city51: City.create({
          name: 'Seoul',
          image: 'http://www.adlittle.com/sites/default/files/locations/Seoul-location.jpg',
          continent: data.continentAsia
        }),
        city52: City.create({
          name: 'Tokyo',
          image: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Japan/Tokyo/tokyo-things-to-do-lead-image.jpg?imwidth=450',
          continent: data.continentAsia
        }),
        city53: City.create({
          name: 'Singapore',
          image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/03/14/105066394-GettyImages-498350103_1.1910x1000.jpg',
          continent: data.continentAsia
        }),
        city54: City.create({
          name: 'Taipei',
          image: 'https://www.cathaypacific.com/content/dam/destinations/taipei/cityguide-gallery/taipei_skyline_920x500.jpg',
          continent: data.continentAsia
        }),
        city55: City.create({
          name: 'Hong Kong',
          image: 'https://www.abercrombiekent.com/-/media/ak/hero-images/asia-china-hong-kong-skyline.jpg?h=500&w=1224&la=en&hash=B9F77AEC6E3B9A35850538C3067588A0D9A32B67',
          continent: data.continentAsia
        }),
        city56: City.create({
          name: 'Dubai',
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/01/22/13/dubai_lester_ali.jpg?w968h681',
          continent: data.continentAsia
        }),
        city57: City.create({
          name: 'Mumbai',
          image: 'https://www.cruisemapper.com/images/ports/15-large-9ae20782c8938eedba46925af5e94fe6.jpg',
          continent: data.continentAsia
        }),
        city58: City.create({
          name: 'Manila',
          image: 'https://media.millenniumhotels.com/mhb-media/9/B/D/9BD61C8C-86AC-41A1-8DB5-1C7FB1303CB2/heritage-manila-hero.jpg',
          continent: data.continentAsia
        }),
        city59: City.create({
          name: 'Hanoi',
          image: 'http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hanoi/first-time/pagePropertiesImage/hanoi.jpg.jpg',
          continent: data.continentAsia
        }),
        city60: City.create({
          name: 'Kuala Lumpur',
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/21/15/kuala-lumpur.jpg?w968h681',
          continent: data.continentAsia
        }),


        // --------------- OCEANIA -----------------

        city61: City.create({
          name: 'Papete',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Papeete_-_Marina_Taina.JPG',
          continent: data.continentOceania
        }),
        city62: City.create({
          name: 'Brisbane',
          image: 'https://www.australia.com/content/australia/en/places/brisbane-and-surrounds/guide-to-brisbane/jcr:content/image.adapt.1200.HIGH.jpg',
          continent: data.continentOceania
        }),
        city63: City.create({
          name: 'Auckland',
          image: 'https://www.aucklandnz.com/sites/build_auckland/files/styles/carousel_banner/public/media-library/images/bc-visit-destinations-central-auckland_0.jpg',
          continent: data.continentOceania
        }),
        city64: City.create({
          name: 'Christchurch',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Christchurch_City.jpg/1200px-Christchurch_City.jpg',
          continent: data.continentOceania
        }),
        city65: City.create({
          name: 'Sydney',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Sydney_Opera_house_3.jpg',
          continent: data.continentOceania
        }),
        city66: City.create({
          name: 'Tauranga',
          image: 'https://cdn.vroomvroomvroom.co.nz/images/vroomvroomvroom-co-nz/cms/mt-maunganui-beach-from-the-summit-walking-track-of-north-tauranga-nz-dp-min.jpg',
          continent: data.continentOceania
        }),
        city67: City.create({
          name: 'Taupo',
          image: 'https://dbijapkm3o6fj.cloudfront.net/resources/3173,1004,1,6,4,0,911,688/-4084-/20161017152932/taupo-panorama.jpeg',
          continent: data.continentOceania
        }),
        city68: City.create({
          name: 'Rotorua',
          image: 'https://afar-production.imgix.net/uploads/syndication/holland_americas/images/wpyk4SXfUo/original_WR1683950.jpg?w=750&h=563&fit=crop',
          continent: data.continentOceania
        }),
        city69: City.create({
          name: 'Melbourne',
          image: 'https://www.visitvictoria.com/-/media/images/melbourne/destinations/melbourne-park_mel_r_supplied-082_1150x863.jpg?h=600&iar=1&mh=600&mw=800&w=800&ts=20170206470129&hash=130DD71D109FF4701085F90BA3CE0771',
          continent: data.continentOceania
        }),
        city70: City.create({
          name: 'Newcastle',
          image: 'https://www.newcastle.nsw.gov.au/Newcastle/media/Images/Backgrounds/Newcastle-Nobbys_BG_MOB.jpg',
          continent: data.continentOceania
        }),


        // --------------- ANTARTICA -----------------

        city71: City.create({
          name: 'Villa las Estrellas',
          image: 'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzQyM2M3M2RmMjVjMjllMWY3NF9WaWxsYV9MYXNfRXN0cmVsbGFzLl9WaXN0YV9ub2N0dXJuYS5qcGciXSxbInAiLCJ0aHVtYiIsIngzOTA-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ',
          continent: data.continentAntartica
        }),
        city72: City.create({
          name: 'Falkland Islands',
          image: 'https://s3.amazonaws.com/iexplore_web/images/assets/000/006/248/original/falkland_islands.jpg?1443182335',
          continent: data.continentAntartica
        }),
        city73: City.create({
          name: 'Weddell Sea',
          image: 'http://www.rcgs.org/travel/one-ocean-expeditions/images/2018-antarctica-ultimate.jpg',
          continent: data.continentAntartica
        }),
        city74: City.create({
          name: 'Antarctic Peninsula - Basecamp',
          image: 'https://www.vaya-antarctica.com/wp-content/uploads/Falklands-South-Georgia-Ant-Peninsula-%C2%A9-Fotografie-Dietmar-Denger-Oceanwide-Expeditions241.jpg_Dietmar-DengerOceanwide-Expeditions-1920x1060.jpeg',
          continent: data.continentAntartica
        }),
        city75: City.create({
          name: 'Paradise Harbor',
          image: 'http://www.destination360.com/antarctica/images/s/paradise-harbor.jpg',
          continent: data.continentAntartica
        }),
        city76: City.create({
          name: 'King George Island',
          image: 'http://photos.wikimapia.org/p/00/00/28/67/32_big.jpg',
          continent: data.continentAntartica
        }),
        city77: City.create({
          name: 'Admiralty Bay',
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Admiralty_Bay_-_Base_G.jpg',
          continent: data.continentAntartica
        }),
        city78: City.create({
          name: 'Elephant Island',
          image: 'https://c1.staticflickr.com/1/335/31856103163_bdb3a4ac21_b.jpg',
          continent: data.continentAntartica
        }),
        city79: City.create({
          name: 'Deception Island',
          image: 'https://www.cruisemapper.com/images/ports/2464-2db5568b7f7.jpg',
          continent: data.continentAntartica
        }),
        city80: City.create({
          name: 'South Shetland Islands',
          image: 'https://www.theantarcticaspecialists.com/sites/default/files/styles/1920x1200adaptive/public/slideshow-pics/Chinstrappenguins.jpg?itok=jspfTyKO&slideshow=true&slideshowAuto=true&slideshowSpeed=4000&speed=350&transition=elastic',
          continent: data.continentAntartica

        })

      })

    })


    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
