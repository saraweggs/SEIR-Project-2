// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

// CONFIGURATION
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI


// MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// DATABASE
mongoose.connect(mongoURI, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})

// CONTROLLER
const productsController = require('./controllers/products.js');
app.use('/ootd', productsController);


// LISTENER
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
