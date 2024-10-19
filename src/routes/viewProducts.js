const express = require('express');
const router = express.Router();
const Product = require('../models/product');  // Adjust path as needed

// GET /api/getproducts - Fetch all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();  // Fetch all products from the database
        res.status(200).json(products);         // Return products as JSON
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);  // Fetch product by ID
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

module.exports = router;
