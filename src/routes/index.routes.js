//Express
var express = require('express');
var router = express.Router();
//Controller
const { index, usersTokens} = require('../controllers/indexController');

router.get('/', index);
router.get('/usersTokens', usersTokens);

module.exports = router;
