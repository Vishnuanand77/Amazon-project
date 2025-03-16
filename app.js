const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.redirect('/products');
});

// Products route - Search page
app.get('/products', (req, res) => {
    const products = require('./data/products.json');
    const searchQuery = req.query.q || '';
    
    let filteredProducts = products;
    if (searchQuery) {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    res.render('products', { 
        products: filteredProducts,
        searchQuery
    });
});

// Product details route
app.get('/products/:id', (req, res) => {
    const products = require('./data/products.json');
    const product = products.find(p => p.id === req.params.id);
    
    if (!product) {
        return res.status(404).render('error', { 
            message: 'Product not found'
        });
    }
    
    res.render('product-details', { product });
});

// Error handling
app.use((req, res) => {
    res.status(404).render('error', { 
        message: 'Page not found'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 