const express = require('express');
const user = express.Router();
const User = require('../models/users.js');


user.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
    }
    console.log(createdUser);
    res.redirect('/ootd')
  })
})

module.exports = user;
