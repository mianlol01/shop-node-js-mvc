const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");
// controllers/cartController.js
async function getCart(req, res) {
  try {
    const cart = req.session.cart || [];
    const cartProducts = await Promise.all(
      cart.map(async (item) => {
        const product = await productModel.getProduct(item.id);
        return {id: product[0].id_product ,name: product[0].name_product ,price: product[0].price, quantity: item.quantity };
      })
    );
    console.log(cartProducts);
    res.render("cart", {
      pageTitle: "Your Cart",
      products: cartProducts,
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
  res.redirect("cart");
}

module.exports = {
  getCart,
  postCart,
};
