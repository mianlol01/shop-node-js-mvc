const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");
const categoryModel = require("../models/categoryModel");
// controllers/cartController.js
async function getCart(req, res) {
  try {
    const cart = req.session.cart || [];
    const cartProducts = await Promise.all(
      cart.map(async (item) => {
        const product = await productModel.getProduct(item.id);
        return {
          id: product[0].id_product,
          name: product[0].name_product,
          price: product[0].price,
          quantity: item.quantity,
          import: item.import,
        };
      })
    );
    const categories = await categoryModel.getCategories();
    totalImport = await cartModel.getCartImport(cartProducts);
    res.render("Cart", {
      pageTitle: "Your Cart",
      products: cartProducts,
      categories,
      totalImport,
    });
  } catch (error) {
    console.error("Error fetching cart products:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function postCart(req, res) {
  const prodId = req.body.productId;
  if (!req.session.cart) {
    req.session.cart = [];
  }
  req.session.cart = await cartModel.addProduct(req.session.cart, prodId);
  res.redirect("Cart");
}

async function deleteCart(req, res) {
  const prodId = req.body.productId;
  req.session.cart = await cartModel.deleteCart(req.session.cart, prodId);
  res.redirect("/Cart");
}

module.exports = {
  getCart,
  postCart,
  deleteCart,
};
