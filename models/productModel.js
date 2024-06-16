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
    request.input('id', sql.Int, id);
    const result = await request.query('SELECT * FROM Product WHERE id_product = @id');
    return result.recordset;
  } catch (error) {
    console.error("Error ejecutando consulta:", error);
    throw error;
  }
}
module.exports = {
  getProducts,
  getProduct,
};
