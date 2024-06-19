const express = require('express');
const product = require('../controllers/productController');
const router = express.Router();

router.get('/Page/:index', product.sendProductByIndex);

module.exports = router;