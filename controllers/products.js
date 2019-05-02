const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');

// NEW ROUTE
router.get('/new', (req, res) => {
  res.render('new.ejs')
})


// INDEX ROUTE
router.get('/', (req, res) => {
  Product.find({}, (error, allProducts) => {
    res.render('index.ejs', {
      products: allProducts
    })
  })
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, (error, deleteProduct) => {
    res.redirect('/ootd')
  })
})

router.put('/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (error, updatedModel) => {
    res.redirect('/ootd/' + req.params.id)
  })
})

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  Product.findById(req.params.id, (error, editProduct) => {
    res.render('edit.ejs', {
      products: editProduct
    })
  })
})

// SHOW ROUTE
router.get('/:id', (req, res) => {
  Product.findById(req.params.id, (error, showProduct) => {
    res.render('show.ejs', {
      products: showProduct
    })
  })
})

// CREATE ROUTE
router.post('/', (req, res) => {
  Product.create(req.body, (error, createProduct) => {
    res.redirect('/ootd')
  })
})

module.exports = router;
