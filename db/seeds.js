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
        })
        // continentAntartica: Continent.create({
        //   name: 'Antartica',
        //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg/220px-Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg.png'
        // })
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
        city11: City.create({
          name: 'Durban',
          image: 'https://www.100resilientcities.org/wp-content/uploads/2017/06/cities-durban_optimized.jpg',
          continent: data.continentAfrica
        }),
        city12: City.create({
          name: 'Pretoria',
          image: 'http://gauteng.hotelguide.co.za/images/pretoria-city-gauteng-590x390.jpg',
          continent: data.continentAfrica
        }),
        city13: City.create({
          name: 'Addis Ababa',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/4a/26/d2/nure-beninne-mosque-of.jpg',
          continent: data.continentAfrica
        }),
        city14: City.create({
          name: 'Dar El Salam',
          image: 'https://www.darelsalam.com/wp-content/uploads/2017/01/malaga.jpg',
          continent: data.continentAfrica
        }),
        city15: City.create({
          name: 'Casablanca',
          image: 'https://www.moroccopedia.com/wp-content/uploads/2013/12/casablanca.jpg',
          continent: data.continentAfrica
        }),
        city16: City.create({
          name: 'Luanda',
          image: 'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/2017/12/13/iol/881/LU.jpg',
          continent: data.continentAfrica
        }),
        city17: City.create({
          name: 'Tunis',
          image: 'https://www.mosaicnorthafrica.com/wp-content/uploads/2017/12/Tunis-Zitouna-Mosque.jpg',
          continent: data.continentAfrica
        }),
        city18: City.create({
          name: 'Dakar',
          image: 'http://www.worldbank.org/content/dam/Worldbank/Feature%20Story/Africa/Senegal/sn-dakar-improving-revenue-for-better-urban-management-homepage-780x439.jpg',
          continent: data.continentAfrica
        }),
        city19: City.create({
          name: 'Maputo',
          image: 'http://media.withtank.com/f22986db68/maputo_skyline3.0_460_wide.jpg',
          continent: data.continentAfrica
        }),
        city20: City.create({
          name: 'Mombasa',
          image: 'https://www.jamiiforums.com/attachments/453530/',
          continent: data.continentAfrica
        }),
        city21: City.create({
          name: 'Port Elizabeth',
          image: 'http://www.bocadillos.co.za/wp-content/uploads/things-to-do-places-to-eat-in-port-elizabeth-sum1.jpg',
          continent: data.continentAfrica
        }),
        city22: City.create({
          name: 'Agadir',
          image: 'https://objects.airfrance.com/FR/common/common/img/tbaf/destinations/AGA/video/AGA-video-1_1-1024x1024.jpg',
          continent: data.continentAfrica
        }),
        city23: City.create({
          name: 'Rabat',
          image: 'https://s1.it.atcdn.net/wp-content/uploads/2017/03/iStock-513955511.jpg',
          continent: data.continentAfrica
        }),
        city24: City.create({
          name: 'Tangier',
          image: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/c9c57c0bf7bde0deb8936f0efd25843a-tangier.jpg?sharp=10&vib=20&w=1200',
          continent: data.continentAfrica
        }),
        city25: City.create({
          name: 'Antananarivo',
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Lake_Anosy%2C_Central_Antananarivo%2C_Capital_of_Madagascar%2C_Photo_by_Sascha_Grabow.jpg',
          continent: data.continentAfrica
        }),
        city26: City.create({
          name: 'Alexandria',
          image: 'https://i.redd.it/y1kjj5tg7aw01.jpg',
          continent: data.continentAfrica
        }),
        city27: City.create({
          name: 'Stellenbosh',
          image: 'https://blog.aifsabroad.com/wp-content/uploads/2018/02/aifs-study-abroad-stellenbosch-south-africa-excursions.jpg',
          continent: data.continentAfrica
        }),
        city28: City.create({
          name: 'Algiers',
          image: 'https://i.guim.co.uk/img/static/sys-images/Travel/Pix/pictures/2010/9/3/1283518317883/City-of-Algiers-overlooki-006.jpg?width=300&quality=85&auto=format&fit=max&s=4239da0d66ccaaea8ee106b70c67b164',
          continent: data.continentAfrica
        }),
        city29: City.create({
          name: 'Kampala',
          image: 'https://www.newvision.co.ug/w-images/7d3bd0c5-dcf4-4f1a-b255-52c38f09c8ff/2/Kampalaview-703x422.jpg',
          continent: data.continentAfrica
        }),
        city30: City.create({
          name: 'Port Louis',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Port_Louis%2C_Mauritius.jpg/220px-Port_Louis%2C_Mauritius.jpg',
          continent: data.continentAfrica
        }),


        // --------------- EUROPE -----------------

        city31: City.create({
          name: 'London',
          image: 'https://zenartdesign.com/wp-content/uploads/2017/03/London-Skyline-800x800px.jpg',
          continent: data.continentEurope
        }),
        city32: City.create({
          name: 'Berlin',
          image: 'https://blog.parkinn.com/wp-content/uploads/sites/7/2018/01/things-in-berlin-skyline.jpg',
          continent: data.continentEurope
        }),
        city33: City.create({
          name: 'Rome',
          image: 'http://www.dearomatours.com/wp-content/uploads/alba-di-roma-2.jpg',
          continent: data.continentEurope
        }),
        city34: City.create({
          name: 'Lisbon',
          image: 'https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/city-guides/lisbon.jpg',
          continent: data.continentEurope
        }),
        city35: City.create({
          name: 'Madrid',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/60/83/89/home-to-the-kings-of.jpg',
          continent: data.continentEurope
        }),
        city36: City.create({
          name: 'Paris',
          image: 'https://tunnelingonline.com/wp-content/uploads/2017/07/Paris-skyline.jpg',
          continent: data.continentEurope
        }),
        city37: City.create({
          name: 'Amsterdam',
          image: 'https://s3.eu-central-1.amazonaws.com/locationscoutnet/images/2018-03/panoramic-view-on-amsterdam-skyline-netherlands_l.jpeg',
          continent: data.continentEurope
        }),
        city38: City.create({
          name: 'Athens',
          image: 'https://c1.staticflickr.com/5/4489/36786164663_f66eeaac8b_b.jpg',
          continent: data.continentEurope
        }),
        city39: City.create({
          name: 'Barcelona',
          image: 'https://www.kimptonhotels.com/blog/wp-content/uploads/2018/09/Barcelona-Skyline.jpg',
          continent: data.continentEurope
        }),
        city40: City.create({
          name: 'Istanbul',
          image: 'https://indigodergisi.com/wp-content/uploads/2016/12/istanbul-gokdelenleri-elektrik-kesintisi-dogalgaz-kaos.jpg',
          continent: data.continentEurope
        }),
        city41: City.create({
          name: 'Naples',
          image: 'https://media.timeout.com/images/105237777/image.jpg',
          continent: data.continentEurope
        }),
        city42: City.create({
          name: 'Valencia',
          image: 'https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/valencia-tours-holidays-1519988330-1000X561.jpg',
          continent: data.continentEurope
        }),
        city43: City.create({
          name: 'Porto',
          image: 'https://www.visitportugal.com/sites/default/files/styles/experiencias_detalhe/public/mediateca/N2100d.jpg?itok=69vSCG0s',
          continent: data.continentEurope
        }),
        city44: City.create({
          name: 'Nice',
          image: 'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2018/05/27184710/Nice-azure-coast-of-France-panoramic-view-79115095-870x400.jpg',
          continent: data.continentEurope
        }),
        city45: City.create({
          name: 'Bordeaux',
          image: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Bordeaux/Bordeaux-itineraries-cityscape.jpg?imwidth=450',
          continent: data.continentEurope
        }),
        city46: City.create({
          name: 'Sevilla',
          image: 'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i49b64a5899da8ae4/version/1497350538/sevilla.jpg',
          continent: data.continentEurope
        }),
        city47: City.create({
          name: 'Budapest',
          image: 'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5515999951001_5214933106001-vs.jpg?pubId=5104226627001&videoId=5214933106001',
          continent: data.continentEurope
        }),
        city48: City.create({
          name: 'Prague',
          image: 'https://images.musement.com/cover/0002/43/prague-castle-fotolia-jpeg_header-142535.jpeg?&q=60&fit=crop&lossless=true&auto=format&w=412&h=250',
          continent: data.continentEurope
        }),
        city49: City.create({
          name: 'Riga',
          image: 'https://loveincorporated.blob.core.windows.net/contentimages/fullsize/9ea3eb8e-6fac-4724-956f-92363c0ac1c3-riga-areal.jpg',
          continent: data.continentEurope
        }),
        city50: City.create({
          name: 'Copenhagen',
          image: 'https://thesavvybackpacker.com/wp-content/uploads/2015/07/copenhangen-travel-costs.jpg',
          continent: data.continentEurope
        }),
        city51: City.create({
          name: 'Kiev',
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/19/14/kiev-landscape.jpg?w968h681',
          continent: data.continentEurope
        }),
        city52: City.create({
          name: 'Oslo',
          image: 'https://www.visitoslo.com/Images/Bilder%20Oslo/Byliv%20and%20Omr%C3%A5der/byen-og-fjorden_FWFoto.jpg?t=ScaleToFill%7C1450x720&ts=vSfnxHgXA7cLsnf8iM8TVpElbOc%3D&pr=2.625',
          continent: data.continentEurope
        }),
        city53: City.create({
          name: 'Vilnius',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vilnius_Modern_Skyline_At_Dusk%2C_Lithuania_-_Diliff.jpg/346px-Vilnius_Modern_Skyline_At_Dusk%2C_Lithuania_-_Diliff.jpg',
          continent: data.continentEurope
        }),
        city54: City.create({
          name: 'Tbilisi',
          image: 'https://georgia.travel/files/image/2017-10-30/400X360/10004.jpg',
          continent: data.continentEurope
        }),
        city55: City.create({
          name: 'Luxembourg',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/LuxembourgCityView.jpg',
          continent: data.continentEurope
        }),
        city56: City.create({
          name: 'Zagreb',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/365px-Zagreb_%2829255640143%29.jpg',
          continent: data.continentEurope
        }),
        city57: City.create({
          name: 'Nicosia',
          image: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/80b103e77809e631eac5de2bc67041fe-nicosia-lefkosia.jpg?sharp=10&vib=20&w=1200',
          continent: data.continentEurope
        }),
        city58: City.create({
          name: 'Edinburgh',
          image: 'https://cimg.visitscotland.com/cms-images/video/edinburgh-view?size=md',
          continent: data.continentEurope
        }),
        city59: City.create({
          name: 'Dublin',
          image: 'https://www.theccd.ie/media/copy_dublin_city.png',
          continent: data.continentEurope
        }),
        city60: City.create({
          name: 'Reykjavik',
          image: 'https://www.whatson.is/wp-content/uploads/2018/05/dsc00722-res-min.jpg',
          continent: data.continentEurope
        }),


        // --------------- NORTH AMERICA -----------------

        city61: City.create({
          name: 'New York',
          image: 'https://thenypost.files.wordpress.com/2014/11/future_midtown_skyline_2.jpg?quality=90&strip=all&w=978&h=652&crop=1',
          continent: data.continentNorthAmerica
        }),
        city62: City.create({
          name: 'Montreal',
          image: 'https://www.mcgill.ca/undergraduate-admissions/files/undergraduate-admissions/experience_montreal.jpg',
          continent: data.continentNorthAmerica
        }),
        city63: City.create({
          name: 'Cancun',
          image: 'https://ahoycruises.co.uk/images/stories/flexicontent/ships/mediaman/l_miami-usa-port-skyline-2-ahoy-500.jpg',
          continent: data.continentNorthAmerica
        }),
        city64: City.create({
          name: 'Vancouver',
          image: 'http://athenaposters.ca/wp-content/uploads/2017/10/2390-0740-Vancouver-British-Columbia-Skyline.jpg',
          continent: data.continentNorthAmerica
        }),
        city65: City.create({
          name: 'San Francisco',
          image: 'https://i.ytimg.com/vi/C9J1p6kO9VA/maxresdefault.jpg',
          continent: data.continentNorthAmerica
        }),
        city66: City.create({
          name: 'Las Vegas',
          image: 'https://static1.squarespace.com/static/5813cddb8419c25c3b42eacd/593d9408cd0f68786f401768/5970d167d1758e894e5c72be/1529357243880/?format=1000w',
          continent: data.continentNorthAmerica
        }),
        city67: City.create({
          name: 'Miami',
          image: 'http://sfns.online/wp-content/uploads/2018/10/miami.jpg',
          continent: data.continentNorthAmerica
        }),
        city68: City.create({
          name: 'Boston',
          image: 'https://cdn.shopify.com/s/files/1/1000/8436/products/boston_2000x.jpg?v=1521521847',
          continent: data.continentNorthAmerica
        }),
        city69: City.create({
          name: 'Chicago',
          image: 'https://images.adsttc.com/media/images/56a1/90b0/e58e/ceb1/5000/02c7/newsletter/shutterstock_143073025.jpg?1453428902',
          continent: data.continentNorthAmerica
        }),
        city70: City.create({
          name: 'Toronto',
          image: 'https://img.theculturetrip.com/840x440/smart//wp-content/uploads/2017/03/1024px-toronto_-_on_-_toronto_skyline2.jpg',
          continent: data.continentNorthAmerica
        }),
        city71: City.create({
          name: 'Seattle',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Seattle_Skyline_WSB.jpg/280px-Seattle_Skyline_WSB.jpg',
          continent: data.continentNorthAmerica
        }),
        city72: City.create({
          name: 'Portland',
          image: 'https://www.visittheusa.co.uk/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2016-11/Drone.__72%20DPI.jpg?itok=jhGikGPz',
          continent: data.continentNorthAmerica
        }),
        city73: City.create({
          name: 'San Diego',
          image: 'http://www.cbre.us/-/media/cbre/countryunitedstates/corporate%20offices/southern%20california/san%20diego/sandiego_module_768x582.png?mh=0&w=768&mw=0&h=582&la=en&hash=B9A6FE68FBAD3E3600C610B1115A018BC4EB6A89',
          continent: data.continentNorthAmerica
        }),
        city74: City.create({
          name: 'Havana',
          image: 'https://cdn.escapism.to/gallery/5b4a68d402b96.jpeg',
          continent: data.continentNorthAmerica
        }),
        city75: City.create({
          name: 'Victoria',
          image: 'https://www.tourismvictoria.com/sites/default/files/victoria_inner_harbour_flowers.jpg',
          continent: data.continentNorthAmerica
        }),
        city76: City.create({
          name: 'Washington, D.C.',
          image: 'https://www.visitmacysusa.com/sites/default/files/styles/hero/public/macys_washingtondc_header.jpg?itok=lBqsf3Db',
          continent: data.continentNorthAmerica
        }),
        city77: City.create({
          name: 'Puerto Vallarta',
          image: 'https://www.garzablancaresort.com/blog/wp-content/uploads/2017/06/things-you-didn-t-know-about-puerto-vallarta-mexico.jpg',
          continent: data.continentNorthAmerica
        }),
        city78: City.create({
          name: 'Tulum',
          image: 'https://www.travelreport.mx/wp-content/uploads/2018/07/Que-hacer-en-Tulum-Quintana-Roo.jpg',
          continent: data.continentNorthAmerica
        }),
        city79: City.create({
          name: 'Montego Bay',
          image: 'https://images.trvl-media.com/hotels/13000000/12650000/12641000/12640927/d0db3f3f_z.jpg',
          continent: data.continentNorthAmerica
        }),
        city80: City.create({
          name: 'Orlando',
          image: 'https://www.wwgmc.com/orlando/wp-content/uploads/sites/4/2016/07/orlando.jpg',
          continent: data.continentNorthAmerica
        }),
        city81: City.create({
          name: 'Chichen Itza',
          image: 'https://en.xichen.com.mx/img/zonas-arqueologicas/Chichen/chichen02.jpg',
          continent: data.continentNorthAmerica
        }),
        city82: City.create({
          name: 'Santo Domingo',
          image: 'https://www.colonialtours.com/images/1aMalecMetro-Santo-Domingo_1.jpg',
          continent: data.continentNorthAmerica
        }),
        city83: City.create({
          name: 'Panama',
          image: 'https://corporate.airfrance.com/sites/default/files/styles/main_image_node/public/corpo_panama.jpg?itok=o0hZ_-mN',
          continent: data.continentNorthAmerica
        }),
        city84: City.create({
          name: 'San Jose',
          image: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-04/best-of-San-Jose-Costa-Rica-1.jpg',
          continent: data.continentNorthAmerica
        }),
        city85: City.create({
          name: 'Mexico City',
          image: 'https://theculturetrip.com/wp-content/uploads/2017/05/flickr-lui_piquee.jpg',
          continent: data.continentNorthAmerica
        }),
        city86: City.create({
          name: 'Playa del Carmen',
          image: 'https://developerdirectinvestments.com/wp-content/uploads/2018/05/Invest-in-Playa-condos.jpg',
          continent: data.continentNorthAmerica
        }),
        city87: City.create({
          name: 'Puerto Escondido',
          image: 'https://visitapuerto.com/wp-content/uploads/2014/04/puerto-escondido1.jpg',
          continent: data.continentNorthAmerica
        }),
        city88: City.create({
          name: 'Honolulu',
          image: 'https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Oahu-Honolulu-Aerial-Hero-2_1.jpg?itok=XX4tTNBw',
          continent: data.continentNorthAmerica
        }),
        city89: City.create({
          name: 'San Antonio',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDigQX4YopL91w8I8yvjOSolIdTaH7VJAy74xTljakZQlLUGrS',
          continent: data.continentNorthAmerica
        }),
        city90: City.create({
          name: 'Houston',
          image: 'https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_300,q_60,w_600/v1/clients/houston/highlight5_d37d5a87-b8cd-49a0-86d6-f7c22efe2f02.jpg',
          continent: data.continentNorthAmerica
        }),


        // --------------- SOUTH AMERICA -----------------

        city91: City.create({
          name: 'Buenos Aires',
          image: 'https://i1.wp.com/www.thebubble.com/wp-content/uploads/La-Rueda-Buenos-Aires.jpg?resize=735%2C395&ssl=1',
          continent: data.continentSouthAmerica
        }),
        city92: City.create({
          name: 'Lima',
          image: 'https://cdn-04.independent.ie/life/travel/article34823398.ece/05e10/AUTOCROP/w620/lima.jpg',
          continent: data.continentSouthAmerica
        }),
        city93: City.create({
          name: 'Rio de Janeiro',
          image: 'https://data.jigsawpuzzle.co.uk/clementoni.8/rio-de-janeiro-jigsaw-puzzle-500-pieces.60880-1.fs.jpg',
          continent: data.continentSouthAmerica
        }),
        city94: City.create({
          name: 'La Paz',
          image: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/09/Intrepid-Travel-bolivia_la-paz_city-of-peace.jpg',
          continent: data.continentSouthAmerica
        }),
        city95: City.create({
          name: 'Quito',
          image: 'https://www.blacktomato.com/wp-content/uploads/2012/09/Basilica-del-Voto-Quito_115.jpg',
          continent: data.continentSouthAmerica
        }),
        city96: City.create({
          name: 'Porto Alegre',
          image: 'http://martinfletcher.files.wordpress.com/2013/02/porto-alegre-2.jpg',
          continent: data.continentSouthAmerica
        }),
        city97: City.create({
          name: 'Barranquilla',
          image: 'https://www.arrecifetours.com/gestor_web/gestor_pv/imgpv_pv/142/142a_hb_58adb5b5a2d73.jpg',
          continent: data.continentSouthAmerica
        }),
        city98: City.create({
          name: 'Ushuaia',
          image: 'https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/ushuaia-to-argentina-1519295860-1000X561.jpg',
          continent: data.continentSouthAmerica
        }),
        city99: City.create({
          name: 'Fortaleza',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/FORTALEZA%2C_BRAZIL.jpg',
          continent: data.continentSouthAmerica
        }),
        city100: City.create({
          name: 'Arequipa',
          image: 'https://www.roadaffair.com/wp-content/uploads/2017/10/sunrise-cusco-peru-shutterstock_354971309.jpg',
          continent: data.continentSouthAmerica
        }),
        city101: City.create({
          name: 'Caracas',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Teleferico_de_Caracas._Vista_de_la_ciudad.jpg/300px-Teleferico_de_Caracas._Vista_de_la_ciudad.jpg',
          continent: data.continentSouthAmerica
        }),
        city102: City.create({
          name: 'Cartagena',
          image: 'https://jschristina-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Cartagena-Colombia-drone-shot-jetsetchristina-travel-guide-blog-instagram.jpg',
          continent: data.continentSouthAmerica
        }),
        city103: City.create({
          name: 'Cusco',
          image: 'https://3bbdb23jem2j4esrdm1gcdbd-wpengine.netdna-ssl.com/wp-content/uploads/cusco-city-guide-main.jpg',
          continent: data.continentSouthAmerica
        }),
        city104: City.create({
          name: 'Cordoba',
          image: 'https://www.tripsavvy.com/thmb/2VS3GmuAGQbKaIOwy6bdxI_tmNk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-519894407-592a43145f9b585950a5dfec.jpg',
          continent: data.continentSouthAmerica
        }),
        city105: City.create({
          name: 'Valparaiso',
          image: 'https://chile.travel/wp-content/uploads/2016/04/Valparaiso-cerroalegre-sernatur-ATR174.jpg',
          continent: data.continentSouthAmerica
        }),
        city106: City.create({
          name: 'Barquisimeto',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Este_de_Barquisimeto.jpg/240px-Este_de_Barquisimeto.jpg',
          continent: data.continentSouthAmerica
        }),
        city107: City.create({
          name: 'Rosario',
          image: 'https://c2.staticflickr.com/8/7146/27499733206_714fbde4a4_b.jpg',
          continent: data.continentSouthAmerica
        }),
        city108: City.create({
          name: 'Punta del Este',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Punta_del_este3.jpg',
          continent: data.continentSouthAmerica
        }),
        city109: City.create({
          name: 'Recife',
          image: 'https://abrilviagemeturismo.files.wordpress.com/2016/12/thinkstockphotos-474448950.jpeg?quality=70&strip=info&w=680&h=453&crop=1',
          continent: data.continentSouthAmerica
        }),
        city110: City.create({
          name: 'Baños de Agua Santa',
          image: 'https://i2.wp.com/pasaportesindestino.net/wp-content/uploads/2018/04/2.png?fit=810%2C450&ssl=1',
          continent: data.continentSouthAmerica
        }),



        // --------------- ASIA -----------------

        city111: City.create({
          name: 'Seoul',
          image: 'http://www.adlittle.com/sites/default/files/locations/Seoul-location.jpg',
          continent: data.continentAsia
        }),
        city112: City.create({
          name: 'Tokyo',
          image: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Japan/Tokyo/tokyo-things-to-do-lead-image.jpg?imwidth=450',
          continent: data.continentAsia
        }),
        city113: City.create({
          name: 'Singapore',
          image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/03/14/105066394-GettyImages-498350103_1.1910x1000.jpg',
          continent: data.continentAsia
        }),
        city114: City.create({
          name: 'Taipei',
          image: 'https://www.cathaypacific.com/content/dam/destinations/taipei/cityguide-gallery/taipei_skyline_920x500.jpg',
          continent: data.continentAsia
        }),
        city115: City.create({
          name: 'Hong Kong',
          image: 'https://www.abercrombiekent.com/-/media/ak/hero-images/asia-china-hong-kong-skyline.jpg?h=500&w=1224&la=en&hash=B9F77AEC6E3B9A35850538C3067588A0D9A32B67',
          continent: data.continentAsia
        }),
        city116: City.create({
          name: 'Dubai',
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/01/22/13/dubai_lester_ali.jpg?w968h681',
          continent: data.continentAsia
        }),
        city117: City.create({
          name: 'Mumbai',
          image: 'https://www.cruisemapper.com/images/ports/15-large-9ae20782c8938eedba46925af5e94fe6.jpg',
          continent: data.continentAsia
        }),
        city118: City.create({
          name: 'Manila',
          image: 'https://media.millenniumhotels.com/mhb-media/9/B/D/9BD61C8C-86AC-41A1-8DB5-1C7FB1303CB2/heritage-manila-hero.jpg',
          continent: data.continentAsia
        }),
        city119: City.create({
          name: 'Hanoi',
          image: 'http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hanoi/first-time/pagePropertiesImage/hanoi.jpg.jpg',
          continent: data.continentAsia
        }),
        city120: City.create({
          name: 'Kuala Lumpur',
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/21/15/kuala-lumpur.jpg?w968h681',
          continent: data.continentAsia
        }),
        city121: City.create({
          name: 'Ho Chi Minh City',
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/25/16/ho-chi-minh-skyline.jpg?w968h681',
          continent: data.continentAsia
        }),
        city122: City.create({
          name: 'Osaka',
          image: 'https://cdn2.veltra.com/ptr/20160825042916_988833969_11829_0.jpg?imwidth=550&impolicy=custom',
          continent: data.continentAsia
        }),
        city123: City.create({
          name: 'Chengdu',
          image: 'https://cdn.newsapi.com.au/image/v1/5db4efaea6a8e05941ae039c5505af62',
          continent: data.continentAsia
        }),
        city124: City.create({
          name: 'Chiang Mai',
          image: 'http://static.asiawebdirect.com/m/bangkok/portals/chiangmai-bangkok-com/homepage/pagePropertiesImage/chiang-mai-thailand.jpg.jpg',
          continent: data.continentAsia
        }),
        city125: City.create({
          name: 'Hangzhou',
          image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/05/20/102696502-hangzhou.jpg?v=1432167587',
          continent: data.continentAsia
        }),
        city126: City.create({
          name: 'Ulaanbaatar',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/UB_downtown.jpg/220px-UB_downtown.jpg',
          continent: data.continentAsia
        }),
        city127: City.create({
          name: 'Dongguan',
          image: 'http://images.china.cn/attachement/jpg/site1007/20101011/000cf1bdd2450e1cb7a805.jpg',
          continent: data.continentAsia
        }),
        city128: City.create({
          name: 'Siem Reap',
          image: 'https://d3hne3c382ip58.cloudfront.net/resized/750x420/full-day-angkor-wat-tour-from-siem-reap-tour-2-215993_1510029029.JPG',
          continent: data.continentAsia
        }),
        city129: City.create({
          name: 'Riyadh',
          image: 'https://a1.r9cdn.net/rimg/dimg/c4/71/6192eca9-city-35744-55796af6.jpg?crop=true&width=1000&height=600&xhint=1282&yhint=1007',
          continent: data.continentAsia
        }),
        city130: City.create({
          name: 'Petra',
          image: 'https://rvca738f6h5tbwmj3mxylox3-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/GI_521275152_ElDier_PetraMonestary.jpg',
          continent: data.continentAsia
        }),


        // --------------- OCEANIA -----------------

        city131: City.create({
          name: 'Papete',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Papeete_-_Marina_Taina.JPG',
          continent: data.continentOceania
        }),
        city132: City.create({
          name: 'Brisbane',
          image: 'https://www.australia.com/content/australia/en/places/brisbane-and-surrounds/guide-to-brisbane/jcr:content/image.adapt.1200.HIGH.jpg',
          continent: data.continentOceania
        }),
        city133: City.create({
          name: 'Auckland',
          image: 'https://www.aucklandnz.com/sites/build_auckland/files/styles/carousel_banner/public/media-library/images/bc-visit-destinations-central-auckland_0.jpg',
          continent: data.continentOceania
        }),
        city134: City.create({
          name: 'Christchurch',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Christchurch_City.jpg/1200px-Christchurch_City.jpg',
          continent: data.continentOceania
        }),
        city135: City.create({
          name: 'Sydney',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Sydney_Opera_house_3.jpg',
          continent: data.continentOceania
        }),
        city136: City.create({
          name: 'Tauranga',
          image: 'https://cdn.vroomvroomvroom.co.nz/images/vroomvroomvroom-co-nz/cms/mt-maunganui-beach-from-the-summit-walking-track-of-north-tauranga-nz-dp-min.jpg',
          continent: data.continentOceania
        }),
        city137: City.create({
          name: 'Taupo',
          image: 'https://dbijapkm3o6fj.cloudfront.net/resources/3173,1004,1,6,4,0,911,688/-4084-/20161017152932/taupo-panorama.jpeg',
          continent: data.continentOceania
        }),
        city138: City.create({
          name: 'Rotorua',
          image: 'https://afar-production.imgix.net/uploads/syndication/holland_americas/images/wpyk4SXfUo/original_WR1683950.jpg?w=750&h=563&fit=crop',
          continent: data.continentOceania
        }),
        city139: City.create({
          name: 'Melbourne',
          image: 'https://www.visitvictoria.com/-/media/images/melbourne/destinations/melbourne-park_mel_r_supplied-082_1150x863.jpg?h=600&iar=1&mh=600&mw=800&w=800&ts=20170206470129&hash=130DD71D109FF4701085F90BA3CE0771',
          continent: data.continentOceania
        }),
        city140: City.create({
          name: 'Newcastle',
          image: 'https://www.newcastle.nsw.gov.au/Newcastle/media/Images/Backgrounds/Newcastle-Nobbys_BG_MOB.jpg',
          continent: data.continentOceania
        }),
        city141: City.create({
          name: 'Perth',
          image: 'https://www.experienceperth.com/sites/ep/files/styles/teaser_simple/public/2018-04/Elizabeth%20quay1.jpg?itok=E7HKU4xB',
          continent: data.continentOceania
        }),
        city142: City.create({
          name: 'Canberra',
          image: 'https://www.mynrma.com.au/-/media/local-guides/canberra/mobile-banner-aerial-view-canberra.jpg?h=360&la=en&w=640&hash=8B0B68E29FCEA5D539148EFADB10BF25',
          continent: data.continentOceania
        }),
        city143: City.create({
          name: 'Port Moresby',
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Port_Moresby_Town2_Mschlauch.jpg',
          continent: data.continentOceania
        }),
        city144: City.create({
          name: 'Townsville',
          image: 'https://assets.atdw-online.com.au/images/Original__9208857_TQTE_0239_Aerial_Townsville_EDITED_fzsmr8a.jpg?rect=298,0,4772,3579&w=2048&h=1536',
          continent: data.continentOceania
        }),
        city145: City.create({
          name: 'Whangarei',
          image: 'https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/whangarei-falls.jpg?focalpointx=50&focalpointy=41&height=427&outputformat=jpg&quality=85&source=4281996&transformationsystem=focalpointcrop&width=640&securitytoken=FC1C2C9D4BB6A16A310B83CC26227D8A',
          continent: data.continentOceania
        }),
        city146: City.create({
          name: 'Gold Coast',
          image: 'https://www.australia.com/content/australia/en/places/gold-coast-and-surrounds/guide-to-the-gold-coast/jcr:content/image.adapt.1200.HIGH.jpg',
          continent: data.continentOceania
        }),
        city147: City.create({
          name: 'Wollongong',
          image: 'https://assets.atdw-online.com.au/images/36ad45566d944eb734521b4fd9bd5eb5.jpeg?rect=0,0,2048,1536&w=800&h=600',
          continent: data.continentOceania
        }),
        city148: City.create({
          name: 'Hagåtña',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Hagatna_from_Fort_Santa_Agueda.JPG/250px-Hagatna_from_Fort_Santa_Agueda.JPG',
          continent: data.continentOceania
        }),
        city149: City.create({
          name: 'Hobart',
          image: 'https://www.australia.com/content/australia/en/places/hobart-and-surrounds/guide-to-hobart/jcr:content/image.adapt.1200.HIGH.jpg',
          continent: data.continentOceania
        }),
        city150: City.create({
          name: 'Darwin',
          image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=origxorig:format=jpg/path/se80bcf7e1bbfb507/image/iecdc4a79e12dc507/version/1486809863/image.jpg',
          continent: data.continentOceania
        })

      })

    })


    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
