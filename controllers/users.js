const express = require('express');
const user = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');


user.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    res.redirect('/ootd')
  })
})

module.exports = user;
