const express = require('express');
const router = express.Router();
const Product = require('../models/product');  // Adjust path as needed

// POST /api/createproduct - Create a new product
router.post('/', async (req, res) => {
    const { name, brand, category, description, sku, modelNumber, supplier, warranty, variants } = req.body;

    try {
        const product = new Product({
            name,
            brand,
            category,
            description,
            sku,
            modelNumber,
            supplier,
            warranty,
            variants,
        });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});

module.exports = router;
