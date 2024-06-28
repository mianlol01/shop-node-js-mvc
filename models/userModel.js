const { sql } = require("../config/dbConfig");

async function signupUser(user) {
  try {
    const request = new sql.Request();
    console.log(user);
    await request
      .input("username", sql.NVarChar(100), user.username)
      .input("email", sql.NVarChar(100), user.email)
      .input("password_user", sql.NVarChar(100), user.password)
      .input("name_user", sql.NVarChar(100), user.name)
      .input("lastname_user", sql.NVarChar(100), user.lastname)
      .query(
        "INSERT INTO Users (username, email, password_user, name_user, lastname_user) VALUES (@username, @email, @password_user, @name_user, @lastname_user)"
      );
    return { success: true, user };
  } catch (error) {
    console.error("Error registrando cliente:", error);
    throw error;
  }
}

async function loginUser(user) {
  try {
    const request = new sql.Request();
    const result = await request
      .input("username", sql.NVarChar(100), user.username)
      .input("password_user", sql.NVarChar(100), user.password)
      .query("EXEC USP_LOGIN @usr = @username, @pas = @password_user");
    if (result.recordset.length == 0) {
      return -1;
    }
    return result.recordset[0];
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}

async function findUser(username) {
  try {

    const request = new sql.Request();
    const result = await request.query("EXEC FindUser " + username);
    console.log(result.recordset);
    if (result.recordset.length == 1) {
      return -1;
    }
    return 0;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}

module.exports = {
  signupUser,
  loginUser,
  findUser,
};
