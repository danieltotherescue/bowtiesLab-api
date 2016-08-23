var express = require('express');
var router  = express.Router();

// Require controllers.
// var pagesController = require('../controllers/pages');
var bowtiesController = require('../controllers/bowties');

// root path:
router.route('/')
  .get(bowtiesController.home);
// // router.get('/about', pagesController.about);
// router.route('/about')
//   .get(pagesController.about);
// router.route('/bowties')
//   .get(pagesController.bowties);

// API for bowties
router.route('/api/bowties')
  .get(bowtiesController.index)
  .post(bowtiesController.create);

router.route('/api/bowties/:id')
  .patch(bowtiesController.update)
  .delete(bowtiesController.destroy);

module.exports = router;
