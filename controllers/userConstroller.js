const userModel = require("../models/userModel");

async function getSignup(req, res) {
  try {
    res.render("signup");
  } catch (error) {
    res.status(500).send("Error registrando usuario");
  }
}

async function postSignup(req, res) {
  try {
    const { username, email, password, name, lastname } = req.body;
    const user = {
      username: username,
      email: email,
      password: password,
      name: name,
      lastname: lastname,
    };
    let mensaje;
    const userValidation = await userModel.findUser(user.username);
    console.log(user.username);
    console.log(userValidation);
    if (userValidation == -1) {
      mensaje = `
        <script>
      document.addEventListener('DOMContentLoaded', function() {
        Swal.fire({
  icon: "error",
  title: "Usuario existente!",
  text: "Ingrese otro usuario",
  footer: '<a href="#">Why do I have this issue?</a>'
});
      });
    </script>
        `;
      return res.render("signup", {mensaje});
    }
    await userModel.signupUser(user);
    res.render("acount", { user });
  } catch (error) {
    res.status(500).send("Error registrando usuario");
  }
}

async function getUser(req, res) {
  try {
    res.render("login");
  } catch (error) {
    res.status(500).send("Error registrando usuario");
  }
}
async function postLogin(req, res) {
  try {
    let mensaje;
    const { username, password } = req.body;
    const user = {
      username: username,
      password: password,
    };
    const usuario = await userModel.loginUser(user);
    if (usuario == -1) {
      mensaje = `
        <script>
      document.addEventListener('DOMContentLoaded', function() {
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Credenciales incorrectas!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
      });
    </script>
        `;
      return res.render("login", { mensaje });
    }
    req.session.user = usuario;
    return res.render("account", { usuario });
  } catch (error) {
    return res.status(500).send("Error iniciando sesión");
  }
}

module.exports = {
  postSignup,
  getUser,
  postLogin,
  getSignup,
};
