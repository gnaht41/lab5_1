const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Hiển thị danh sách suppliers
router.get('/', supplierController.getAll);

// Hiển thị form tạo supplier mới
router.get('/create', supplierController.showCreate);

// Xử lý tạo supplier mới
router.post('/create', supplierController.create);

// Hiển thị form chỉnh sửa supplier
router.get('/edit/:id', supplierController.showEdit);

// Xử lý cập nhật supplier
router.post('/edit/:id', supplierController.update);

// Xử lý xóa supplier
router.post('/delete/:id', supplierController.delete);

module.exports = router;
