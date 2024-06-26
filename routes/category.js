const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/:id', productController.sendProductByCategory);

module.exports = router;