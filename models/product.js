const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  season: String,
  description: Array,
  img: String,
  price: Number,
  link: String,
  collect: Boolean
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
