const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  brand: String,
  season: {type: String, required: true},
  description: Array,   // GOAL: turn to array to display as bullet points on show page
  img: String,
  price: {type: Number, min: 0},
  link: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
