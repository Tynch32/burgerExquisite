//Express
const express = require('express');
const router = express.Router();
//Users Controllers
const {register, processRegister, login, processLogin, logout,faq} = require('../controllers/usersController')
//Middlewares
const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');
const cookieCheck= require('../middlewares/cookieCheck');
const userSessionCheck = require('../middlewares/userSessionCheck');
//Validations
const registerValidator = require('../validations/registerValidator');
const userEditValidator = require('../validations/userEditValidator');
const loginValidator = require('../validations/loginValidator');

// -----Users------

//Register
router.get('/register',register);
router.post('/register', registerValidator, processRegister);
//Login
router.get('/login', login);
router.post('/login',loginValidator, processLogin);

//Logout
router.get('/logout',logout);
//Informacion del sitio
router.get('/faq',faq)

module.exports = router;
