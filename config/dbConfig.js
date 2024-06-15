const sql = require("mssql");
require("dotenv").config(); // Cargar las variables de entorno desde el archivo .env

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // Usar true si estás en Azure
    trustServerCertificate: true, // Usar true si estás en local
  },
};

async function connectDB() {
  try {
    await sql.connect(dbConfig);
    console.log("Conexión a la base de datos exitosa");
  } catch (err) {
    console.error("Error conectando a la base de datos:", err);
  }
}

module.exports = {
  sql,
  connectDB,
};
