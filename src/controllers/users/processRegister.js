const db = require("../../database/models");
const { validationResult } = require("express-validator");
const {hashSync} = require('bcryptjs');

module.exports = async (req, res) => {
  const errors = validationResult(req);
  console.log(req.body);
  if (errors.isEmpty()) {
    await db.User.create({
      name: req.body.name.trim(),
      surname: req.body.surname.trim(),
      dni:req.body.dni,
      email: req.body.email.trim(),
      password: hashSync(req.body.password,10),
      role: 0,
      tokens: 0
    }).then(()=>{
      return res.redirect("/users/login");
    }).catch(error=>console.log(error));
  } else {
  return res.render("register", {
      errors: errors.mapped(),
      old: req.body,
      passwordError: "Debes volver a escribir tu contraseña"
    });
  }
};