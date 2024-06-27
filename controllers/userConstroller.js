const userModel = require("../models/userModel");

async function postUser(req, res) {
  try {
    const { username, email, password, name, lastname } = req.body;
    const user = {
      username: username,
      email: email,
      password: password,
      name: name,
      lastname: lastname,
    };
    await userModel.signupUser(user);
    console.log(user);
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
    const { username, password } = req.body;
    const user = {
      username: username,
      password: password,
    };
    const usuario = await userModel.loginUser(user);
    res.render("account", { usuario });
  } catch (error) {
    res.status(500).send("Error iniciando sesión");
  }
}

module.exports = {
  postUser,
  getUser,
  postLogin,
};
