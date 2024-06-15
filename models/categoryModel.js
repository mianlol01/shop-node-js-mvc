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

module.exports = {
  getCategories,
};
