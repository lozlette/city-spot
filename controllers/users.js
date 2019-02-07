const User = require('../models/user')

function indexRoute(req, res) {
  User
    .find()
    .populate({path: 'user', select: 'name'})
    .then(users => res.json(users) )
}

module.exports = {
  index: indexRoute
}
