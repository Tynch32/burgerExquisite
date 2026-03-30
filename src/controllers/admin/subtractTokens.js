const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { dni, amount } = req.body; // obtenemos DNI y cantidad
    const tokensToSubtract = parseFloat(amount);

    if (isNaN(tokensToSubtract) || tokensToSubtract <= 0) {
      return res.status(400).send("Cantidad de tokens inválida");
    }

    // Buscamos al usuario por DNI
    const user = await db.User.findOne({ where: { dni } });

    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    const userTokens = parseFloat(user.tokens); // ✅ convertimos a número

    // Validamos que no se reste más de lo que tiene
    if (tokensToSubtract > userTokens) {
      return res.status(400).send(`No se puede descontar más de ${userTokens} $BEX`);
    }

    // Calculamos los nuevos tokens
    const nuevosTokens = userTokens - tokensToSubtract;

    // Actualizamos en la base de datos
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