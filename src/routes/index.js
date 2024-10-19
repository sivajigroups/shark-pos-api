const express = require('express');
const router = express.Router();

// Import route files
const createProduct = require('./createProduct');
const viewProducts = require('./viewProducts');
const updateProduct = require('./updateProduct');

// Assign routes
router.use('/createproduct', createProduct);
router.use('/getproducts', viewProducts);  // Use /:id for fetching a single product
router.use('/updateproduct', updateProduct);

module.exports = router;
