
const express = require('express');

const app = express(); 


app.use(express.json()); 
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});


module.exports = app;