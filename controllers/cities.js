const City = require('../models/city')

function indexRoute(req, res) {
  City
    .find()
    .then(cities => res.json(cities))
}

function showRoute(req, res) {
  City
    .findById(req.params.id)
    .populate('posts')
    .populate({ path: 'continent', select: 'name' })
    .then(cities => res.json(cities))
}

function createRoute(req, res) {
  City
    .create(req.body)
    .then(cities => res.json(cities))
    .then(cities => res.status(201).json(cities))
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute
}
