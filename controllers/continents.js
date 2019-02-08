const Continent = require('../models/continent')

function indexRoute(req, res) {
  Continent
    .find()
    .populate('cities')
    .then(continent => res.status(200).json(continent))
}

function showRoute(req, res) {
  Continent
    .findById(req.params.id)
    .populate('cities')
    .then(continent => res.json(continent))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
