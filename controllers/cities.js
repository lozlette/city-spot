const City = require('../models/city')

function indexRoute(req, res) {
  City
    .find()
    .then(cities => res.json(cities))
}

function showRoute(req, res) {
  City
    .findById(req.params.id)
    .populate({path: 'continent', select: 'name'})
    .then(cities => res.json(cities))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
