const productModel = require("./productModel");

async function addProduct(cart, id) {
  const existingProductIndex = cart.findIndex((p) => p.id == id);
  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += 1;
    cart[existingProductIndex].import =
      cart[existingProductIndex].quantity * cart[existingProductIndex].price;
  } else {
    unit = await productModel.getProduct(id);
    var cantidad = 1;
    var importe = cantidad * unit[0].price;
    cart.push({
      id: unit[0].id_product,
      name: unit[0].name_product,
      price: unit[0].price,
      quantity: cantidad,
      import: importe,
    });
  }
  return cart;
}

function getCart(cart) {
  return cart;
}

function getCartImport(carro) {
  let importeTotal = 0;
  for (let i = 0; i < carro.length; i++) {
    importeTotal += carro[i].import;
  }
  return importeTotal;
}
async function deleteCart(carro, id) {
  const indice = carro.findIndex((elemento) => elemento.id == id);
  if (indice !== -1) {
    carro.splice(indice, 1);
  }
  return carro;
}

module.exports = {
  addProduct,
  getCart,
  getCartImport,
  deleteCart,
};
