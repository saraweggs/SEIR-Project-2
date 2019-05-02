// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');


// MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// CONTROLLER
const productsController = require('./controllers/products.js');
app.use('/ootd', productsController);

// LISTENER
app.listen(3000, () => {
  console.log('listening...');
})

// DATABASE CONNECTION 
mongoose.connect('mongodb://localhost:27017/ootdapp', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})
const db = mongoose.connection
