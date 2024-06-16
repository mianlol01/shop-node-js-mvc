const categoryModel = require('../models/categoryModel');
const productModel = require('../models/productModel');

async function home(req, res) {
    try {
        const categories = await categoryModel.getCategories();
        const products = await productModel.getProducts();
        console.log(categories);
        console.log(products);
        res.render('index', {categories, products});
    } catch (error) {
        res.status(500).send('Error obteniendo resultados');
    }
}

module.exports = {
    home
}