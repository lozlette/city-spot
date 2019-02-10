const Continent = require('../models/continent')

function indexRoute(req, res, next) {
  Continent
    .find()
    .then(continent => res.json(continent))
    .catch(next)
}

function showRoute(req, res, next) {
  Continent
    .findById(req.params.id)
    .populate('cities')
    .then(continent => res.json(continent))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
