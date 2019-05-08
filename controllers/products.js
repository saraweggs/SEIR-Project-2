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
  res.render('new.ejs', {
    currentUser: req.session.currentUser
  })
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

// ABOUT ROUTE
router.get('/about', (req, res) => {
  Product.find({}, (error, aboutProducts) => {
    res.render('about.ejs', {
      products: aboutProducts,
      currentUser: req.session.currentUser
    })
  })
})

// CONTACT ROUTE
router.get('/contact', (req, res) => {
  Product.find({}, (error, aboutProducts) => {
    res.render('contact.ejs', {
      products: aboutProducts,
      currentUser: req.session.currentUser
    })
  })
})

// FALL ROUTE
router.get('/fall', (req, res) => {
  Product.find({season: 'Fall'}, (error, fallProducts) => {
    res.render('fall.ejs', {
      products: fallProducts,
      currentUser: req.session.currentUser
    })
  })
})

// WINTER ROUTE
router.get('/winter', (req, res) => {
  Product.find({season: 'Winter'}, (error, winterProducts) => {
    res.render('winter.ejs', {
      products: winterProducts,
      currentUser: req.session.currentUser
    })
  })
})

// SPRING ROUTE
router.get('/spring', (req, res) => {
  Product.find({season: 'Spring'}, (error, springProducts) => {
    res.render('spring.ejs', {
      products: springProducts,
      currentUser: req.session.currentUser
    })
  })
})

// SUMMER ROUTE
router.get('/summer', (req, res) => {
  Product.find({season: 'Summer'}, (error, summerProducts) => {
    res.render('summer.ejs', {
      products: summerProducts,
      currentUser: req.session.currentUser
    })
  })
})

// COLLECT ROUTE
router.get('/collection', (req, res) => {
  Product.find({collect: true}, (error, showCollection) => {
    if (req.session.currentUser) {
      res.render('collection.ejs', {
        products: showCollection,
        currentUser: req.session.currentUser
      })
    } else {
      res.render('index.ejs', {
        products: showCollection,
        currentUser: req.session.currentUser
      })
    }
  })
})


// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, (error, deleteProduct) => {
    res.redirect('/ootd')
  })
})

router.put('/:id', (req, res) => {
  if (req.body.collect === 'on') {
    req.body.collect = true;
  } else {
    req.body.collect = false;
  }
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
      products: editProduct,
      currentUser: req.session.currentUser
    })
  })
})

// SHOW ROUTE
router.get('/:id', (req, res) => {
  Product.findById(req.params.id, (error, showProduct) => {
    res.render('show.ejs', {
      products: showProduct,
      currentUser: req.session.currentUser
    })
  })
})

// CREATE ROUTE
router.post('/', (req, res) => {
  if (req.body.collection === 'on') {
    req.body.collect = true;
  } else {
    req.body.collect = false;
  }
  Product.create(req.body, (error, createProduct) => {
    res.redirect('/ootd')
  })
})




module.exports = router;
