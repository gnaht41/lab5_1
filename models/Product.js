const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    phone: String,
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
