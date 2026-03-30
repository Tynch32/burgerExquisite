const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { dni, amount } = req.body;
    const tokensToAdd = parseFloat(amount);

    if (isNaN(tokensToAdd) || tokensToAdd <= 0) {
      return res.status(400).send("Cantidad de tokens inválida");
    }

    const user = await db.User.findOne({ where: { dni } });

    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    // Convertimos tokens a número antes de sumar
    const nuevosTokens = parseFloat(user.tokens) + tokensToAdd;

    await db.User.update(
      { tokens: nuevosTokens, updated_at: new Date() },
      { where: { dni } }
    );
    
    // 🔹 Redirigir a la página anterior
    const backURL = req.get('referer') || '/admin/editTokenUser';
    return res.redirect(backURL);


  } catch (error) {
    console.error(error);
    return res.status(500).send("Error interno del servidor");
  }
};