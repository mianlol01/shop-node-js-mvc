const productModel = require('../models/productModel');

async function listProducts(req, res) {
    try {
        const products = await productModel.getProducts();
        console.log(products);
        res.render('index', {products});
    } catch (error) {
        res.status(500).send('Error obteniendo productos');
    }
}

module.exports = {
    listProducts
}