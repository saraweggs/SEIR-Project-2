// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const session = require('express-session');

// CONFIGURATION
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI


// MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

// DATABASE
mongoose.connect(mongoURI, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})

// CONTROLLER
const productsController = require('./controllers/products.js');
app.use('/ootd', productsController);
const userController = require('./controllers/users.js');
app.use('/users', userController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

app.get('/', (req, res) => {
  res.redirect('/ootd')
})

// LISTENER
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
