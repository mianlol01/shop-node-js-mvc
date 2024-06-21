require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/dbConfig");
const home = require("./routes/home");
const product = require("./routes/product");
const categories = require("./routes/category");
const catalog = require("./routes/catalog");
const cart = require("./routes/cart");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

// Conectar a la base de datos
connectDB();

// Configurar vistas
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Usar rutas
app.use("/", home);
app.use("/Producto", product);
app.use("/Categoria", categories);
app.use("/Productos", catalog);
app.use("/Cart", cart);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Servidor corriendo en el puerto ${PORT} ` + "http://localhost:3000"
  );
});
