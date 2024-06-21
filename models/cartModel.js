const productModel = require("./productModel");

async function addProduct(cart, id) {
  const existingProductIndex = cart.findIndex((p) => p.id == id);
  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += 1;
  } else {
    unit = await productModel.getProduct(id);
    cart.push({
      id: unit[0].id_product,
      name: unit[0].name_product,
      price: unit[0].price,
      quantity: 1,
    });
  }
  console.log(cart);
  return cart;
}

function getCart(cart) {
  return cart;
}

module.exports = {
  addProduct,
  getCart,
};
