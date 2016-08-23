var express = require('express');
var router = express.Router();
var bowtieController = require('../controllers/bowties');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bowties' });
});

router.route('/api/bowties')
  .get(bowtieController.index)
  .post(bowtieController.create);

router.route('/api/bowties/:id')
  .get (bowtieController.show)
  .patch(bowtieController.update)
  .delete(bowtieController.destroy);

module.exports = router;
