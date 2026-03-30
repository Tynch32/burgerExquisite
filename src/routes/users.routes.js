const express = require('express');
const router = express.Router();
const {register, processRegister} = require('../controllers/usersController')
/* GET users listing. */
router.get('/register', register);
router.post('/register', processRegister,);

module.exports = router;
