const express = require('express');
const { getproduts, getSingleproduct } = require('../controllers/productController');
const router = express.Router();

router.route('/').get(getproduts); 
router.route('/:id').get(getSingleproduct); 

module.exports = router;
