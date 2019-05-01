// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const db = mongoose.connection;

// PORT
const PORT = process.env.PORT || 3000;

// DATABASE
mongoose.connect('mongodb://localhost:27017/crudapp', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// LISTENER
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
