require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/dbConfig");
const home = require("./routes/home");
const product = require("./routes/product");
const app = express();

// Conectar a la base de datos
connectDB();

// Configurar vistas
app.set('view engine', 'ejs');
app.set("views", "./views");

// Usar rutas
app.use("/", home);
app.use("/Producto", product);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} ` + 'http://localhost:3000');
});
