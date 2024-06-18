const { sql } = require("../config/dbConfig");

async function getCategories() {
  try {
    const request = new sql.Request();
    const result = await request.query("SELECT * FROM Category");
    return result.recordset;
  } catch (error) {
    console.error("Error ejecutando consulta:", error);
    throw error;
  }
}

async function getCategoryById(id) {
  try {
    const request = new sql.Request();
    request.input('id', sql.Int, id);
    const result = await request.query('SELECT * FROM Category WHERE id_category = @id');
    return result.recordset;
  } catch (error) {
    console.error("Error ejecutando consulta:", error);
    throw error;
  }
}

module.exports = {
  getCategories,
  getCategoryById,
};
