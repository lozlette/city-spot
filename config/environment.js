const env = process.env.NODE_ENV || 'development'
const dbURI = env === 'production' ? process.env.MONGODB_URI : `${process.env.MONGODB_URI}-${env}`

module.exports = { env, dbURI }
