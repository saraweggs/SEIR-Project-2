const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  img: String,
  price: {type: Number, min: 0},
  link: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
