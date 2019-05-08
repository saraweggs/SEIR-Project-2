const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');



sessions.post('/', (req, res) => {
  User.findOne({
    username: req.body.username
  }, (err, foundUser) => {
    if (req.body.password == foundUser.password) {
      req.session.currentUser = foundUser
      res.redirect('/ootd')
    } else {
      res.send('<a href="/">Incorrect Password!</a>')
    }
  });
});

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/ootd')
  })
})

module.exports = sessions;
