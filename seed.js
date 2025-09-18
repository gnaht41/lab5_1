require('dotenv').config();
const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected for seeding');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

const seedData = async () => {
    try {
        // Xóa dữ liệu cũ
        await Supplier.deleteMany();
        await Product.deleteMany();

        // Tạo suppliers mẫu
        const suppliers = await Supplier.insertMany([
            { name: 'Supplier A', address: 'Hanoi', phone: '0123456789' },
            { name: 'Supplier B', address: 'HCM', phone: '0987654321' }
        ]);

        console.log('Suppliers seeded');

        // Tạo products mẫu
        const products = await Product.insertMany([
            { name: 'Product 1', address: 'Warehouse 1', phone: '111111', supplierId: suppliers[0]._id },
            { name: 'Product 2', address: 'Warehouse 2', phone: '222222', supplierId: suppliers[1]._id },
            { name: 'Product 3', address: 'Warehouse 3', phone: '333333', supplierId: suppliers[0]._id }
        ]);

        console.log('Products seeded');

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

connectDB().then(seedData);
