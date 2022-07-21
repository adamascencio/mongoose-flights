var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights (index functionality - read all flights) 
router.get('/', flightsCtrl.index);
// GET /flights/new (new functionality - render form to add flights)
router.get('/new', flightsCtrl.new);
// GET /flights/:id (show functionality - show form to add destination & arrival)
router.get('/:id', flightsCtrl.show);
// POST /flights (create functionality - add new flight information to our model)
router.post('/', flightsCtrl.create);

module.exports = router;
