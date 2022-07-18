var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights (index functionality - read all flights) 
router.get('/', flightsCtrl.index);
// GET /flights/new (new functionality - render form to add flights)
router.get('/new', flightsCtrl.new);

module.exports = router;
