const categoryModel = require('../models/categoryModel');

async function listCategories(req, res) {
    try {
        const categories = await categoryModel.getCategories();
        console.log(categories);
        res.render('index', {categories});
    } catch (error) {
        res.status(500).send('Error obteniendo categorías');
    }
}

module.exports = {
    listCategories
}