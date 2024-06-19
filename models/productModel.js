const { sql } = require("../config/dbConfig");

async function getProducts() {
  try {
    const request = new sql.Request();
    const result = await request.query("SELECT * FROM Product");
    return result.recordset;
  } catch (error) {
    console.error("Error ejecutando consulta:", error);
    throw error;
  }
}

async function getProduct(id) {
  try {
    const request = new sql.Request();
    request.input("id", sql.Int, id);
    const result = await request.query(
      "SELECT * FROM Product WHERE id_product = @id"
    );
    return result.recordset;
  } catch (error) {
    console.error("Error ejecutando consulta:", error);
    throw error;
  }
}

async function getProductByCategory(id) {
  try {
    const request = new sql.Request();
    request.input("id", sql.Int, id);
    const result = await request.query(
      "SELECT * FROM Product WHERE category_producto = @id"
    );
    console.log(result);
    return result.recordset;
  } catch (error) {
    console.error("Error ejecutando consulta:", error);
    throw error;
  }
}

async function getProductByIndex(index) {
  try {
    const request = new sql.Request();
    index = (index *10) - 10;
    request.input("index", sql.Int, index);
    const result = await request.query(
      "SELECT * FROM Product ORDER BY id_product OFFSET @index ROWS FETCH NEXT 9 ROWS ONLY"
    );
    return result.recordset;
  } catch (error) {
    console.error("Error ejecutando consulta:", error);
    throw error;
  }
}

async function getTotalProducts() {
  try {
    const request = new sql.Request();
    const result = await request.query("SELECT COUNT(*) AS total FROM Product");
    return result.recordset;
  } catch (error) {
    console.error("Error ejecutando consulta:", error);
    throw error;
  }
}

module.exports = {
  getProducts,
  getProduct,
  getProductByCategory,
  getProductByIndex,
  getTotalProducts,
};
