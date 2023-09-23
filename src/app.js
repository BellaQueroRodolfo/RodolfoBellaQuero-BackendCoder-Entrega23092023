const express = require('express');
const app = express();
const port = 8080;
const ProductManager = require('./productManager');
const productManager = new ProductManager('./data/products.json', './data/carts.json');
app.use(express.json());
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

app.use('/products', productsRouter);
app.use('/carts', cartsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
