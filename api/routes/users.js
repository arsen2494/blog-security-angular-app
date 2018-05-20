const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        // TODO handle error
        res.status(201).json(user);
    });
});

module.exports = router;
