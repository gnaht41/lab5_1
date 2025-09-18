require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // thêm mongoose
const bodyParser = require('body-parser');
const morgan = require('morgan');

const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Ở app.js
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // đảm bảo đường dẫn views
app.use(express.static(__dirname + '/public')); // thư mục chứa css, js

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index'); // phải trùng với tên file index.ejs trong folder views
});

app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);

// Kết nối MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

connectDB();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}/`));
