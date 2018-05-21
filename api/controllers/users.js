const User = require('../models/user');

exports.createUser = function (req, res) {
  const user = new User(req.query);
  user.save((err, user) => {
    if (err) return res.status(400).send(err);
    res.status(201).json(user);
  });
};
