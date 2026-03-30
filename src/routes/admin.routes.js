//Express
var express = require('express');
var router = express.Router();
//Controller
const { registeredUsers } = require('../controllers/adminController');

router.get('/registeredUsers', registeredUsers);

module.exports = router;