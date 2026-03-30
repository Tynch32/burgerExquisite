const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = async (req, res) => {
  let title = "Tokens";

  try {
    let user = await db.User.findOne({
      where: { dni: req.query.dni } // 👈 CAMBIO ACÁ
    });

    if (user) {
      return res.render('searchUser', { user, addPuntos, title });
    } else {
      return res.render('searchUser', {
        id: "NO hay usuarios registrados con ese DNI",
        addPuntos,
        user: null,
        title
      });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).send("Error interno del servidor");
  }
};