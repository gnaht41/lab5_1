const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Hiển thị danh sách sản phẩm
router.get('/', productController.getAll);

// Hiển thị form tạo sản phẩm mới
router.get('/create', productController.showCreate);

// Xử lý tạo sản phẩm mới
router.post('/create', productController.create);

// Hiển thị form chỉnh sửa sản phẩm
router.get('/edit/:id', productController.showEdit);

// Xử lý cập nhật sản phẩm
router.post('/edit/:id', productController.update);

// Xử lý xóa sản phẩm
router.post('/delete/:id', productController.delete);

module.exports = router;
