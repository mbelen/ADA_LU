var express = require('express');
var router = express.Router();
var usersController = require ('../controllers/usersControllers')

/* GET users listing. */
router.get('/', usersController.index); 

module.exports = router;
