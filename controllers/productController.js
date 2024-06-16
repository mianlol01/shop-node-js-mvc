const productModel = require("../models/productModel");
const categoryModel = require("../models/categoryModel");

async function listProducts(req, res) {
  try {
    const products = await productModel.getProducts();
    console.log(products);
    res.render("index", { products });
  } catch (error) {
    res.status(500).send("Error obteniendo productos");
  }
}
async function sendProduct(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).send({ error: "Invalid product ID" });
    }
    const categories = await categoryModel.getCategories();
    const product = await productModel.getProduct(id);
    console.log(product);
    res.render("product", { product, categories });
  } catch (error) {
    res.status(500).send("Error obteniendo productos");
  }
}

module.exports = {
  listProducts,
  sendProduct,
};
