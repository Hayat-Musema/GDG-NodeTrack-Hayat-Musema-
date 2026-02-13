
const express = require('express');

const app = express(); 


app.use(express.json()); 
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});


module.exports = app;