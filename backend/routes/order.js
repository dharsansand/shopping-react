const express = require('express');
const { createorder } = require('../controllers/orderController');
const router = express.Router();

router.route('/').post(createorder); 

module.exports = router;
