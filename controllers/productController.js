const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// Hiển thị danh sách sản phẩm
exports.getAll = async (req, res) => {
    try {
        const products = await Product.find().populate('supplierId');
        res.render('products/index', { products });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Hiển thị form tạo sản phẩm mới
exports.showCreate = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.render('products/create', { suppliers });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Xử lý tạo sản phẩm mới
exports.create = async (req, res) => {
    try {
        await Product.create(req.body);
        res.redirect('/products');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Hiển thị form chỉnh sửa sản phẩm
exports.showEdit = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const suppliers = await Supplier.find();
        res.render('products/edit', { product, suppliers });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Xử lý cập nhật sản phẩm
exports.update = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/products');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Xử lý xóa sản phẩm
exports.delete = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/products');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
