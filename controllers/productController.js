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
async function sendProductByCategory(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).send({ error: "Invalid category ID" });
    }
    const categories = await categoryModel.getCategories();
    const products = await productModel.getProductByCategory(id);
    const category = await categoryModel.getCategoryById(id);
    console.log(category);
    console.log(products);
    res.render("category", { products, categories, category });
  } catch (error) {
    res.status(500).send("Error obteniendo productos");
  }
}
async function sendProductByIndex(req, res) {
  try {
    const index = parseInt(req.params.index, 10);
    if (isNaN(index)) {
      return res.status(400).send({ error: "Invalid category ID" });
    }
    const categories = await categoryModel.getCategories();
    const products = await productModel.getProductByIndex(index);
    const total = await productModel.getTotalProducts();
    const cantidadIndices = Math.ceil(total[0].total / 10);
    const indices = [];
    for (let i = 1; i <= cantidadIndices; i++) {
      indices.push({ indice: i });
    }
    console.log(total[0].total);
    console.log(index);
    res.render("page", { products, categories, total, indices, index });
  } catch (error) {
    res.status(500).send("Error obteniendo productos");
  }
}

module.exports = {
  listProducts,
  sendProduct,
  sendProductByCategory,
  sendProductByIndex,
};
