const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');
const seedItems = require('../models/seedData.js');
const indexSeed = require('../models/indexSeed.js');
const user = express.Router();
const User = require('../models/users.js');
const sessions = express.Router();


// SEED ROUTES
router.get('/seed/additems', (req, res) => {
  Product.create(seedItems, (error, createdProducts) => {
    res.redirect('/ootd');
  })
})

router.get('/seed/addindex', (req, res) => {
  Product.create(indexSeed, (error, createdItems) => {
    res.redirect('/ootd');
  })
})

// NEW ROUTE
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// INDEX ROUTE
router.get('/', (req, res) => {
  Product.find({}, (error, allProducts) => {
    res.render('index.ejs', {
      products: allProducts,
      currentUser: req.session.currentUser
    })
  })
})

router.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
})

router.get('/', (req, res)=>{
    if(req.session.currentUser){
        res.render('/index.ejs')
    } else {
        res.redirect('/sessions/new');
    }
})

// FALL ROUTE
router.get('/fall', (req, res) => {
  Product.find({season: 'Fall'}, (error, fallProducts) => {
    res.render('fall.ejs', {
      products: fallProducts
    })
  })
})

// WINTER ROUTE
router.get('/winter', (req, res) => {
  Product.find({season: 'Winter'}, (error, winterProducts) => {
    res.render('winter.ejs', {
      products: winterProducts
    })
  })
})

// SPRING ROUTE
router.get('/spring', (req, res) => {
  Product.find({season: 'Spring'}, (error, springProducts) => {
    res.render('spring.ejs', {
      products: springProducts
    })
  })
})

// SUMMER ROUTE
router.get('/summer', (req, res) => {
  Product.find({season: 'Summer'}, (error, summerProducts) => {
    res.render('summer.ejs', {
      products: summerProducts
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
