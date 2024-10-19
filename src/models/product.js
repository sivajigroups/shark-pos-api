const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    sku: { type: String, required: true },
    modelNumber: { type: String },
    supplier: { type: String },
    warranty: { type: String },
    variants: [{
        weight: { type: Number, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true }
    }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
