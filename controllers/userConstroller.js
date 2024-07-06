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
    const usuario = {
      username: username,
      email: email,
      password: password,
      name: name,
      lastname: lastname,
    };
    let mensaje;
    const userValidation = await userModel.findUser(usuario.username);
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
      return res.render("signup", { mensaje });
    }
    req.session.user = usuario;
    res.locals.username = req.session.user.username;
    await userModel.signupUser(usuario);
    res.render("account", { usuario });
  } catch (error) {
    res.status(500).send("Error registrando usuario");
  }
}

async function getUser(req, res) {
  if (req.session.user != null) {
    return res.redirect('/');
  }
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
    res.locals.username = req.session.user.username;
    console.log(res.locals.username + " postLogin");
    return res.redirect("/");
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
