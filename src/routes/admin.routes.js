//Express
var express = require('express');
var router = express.Router();
//Controller
const { registeredUsers, searchUser, editTokenUser, addTokens,subtractTokens } = require('../controllers/adminController');

router.get('/registeredUsers', registeredUsers);
router.get('/editTokenUser', editTokenUser);
router.get('/searchUser', searchUser);

// Nuevas rutas POST para tokens
router.post('/addTokens', addTokens);        // formulario para añadir tokens
router.post('/subtractTokens', subtractTokens); // formulario para descontar tokens

module.exports = router;