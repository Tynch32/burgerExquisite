//Express
var express = require('express');
var router = express.Router();
//Controller
const { registeredUsers, searchUser, editTokenUser, addTokens,subtractTokens, panelAdministrador } = require('../controllers/adminController');
//Middlewares
const adminCheck = require('../middlewares/adminCheck');

//Vistas Admin
router.get('/panelAdministrador', adminCheck, panelAdministrador);
router.get('/registeredUsers', adminCheck, registeredUsers);
router.get('/editTokenUser', adminCheck, editTokenUser);
router.get('/searchUser', adminCheck, searchUser);

// Nuevas rutas POST para tokens
router.post('/addTokens', adminCheck, addTokens);        // formulario para añadir tokens
router.post('/subtractTokens', adminCheck, subtractTokens); // formulario para descontar tokens

//Export
module.exports = router;