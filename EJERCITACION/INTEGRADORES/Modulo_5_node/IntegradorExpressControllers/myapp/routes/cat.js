var express = require('express');
var router = express.Router();
var catController = require('../controllers/catController');

/* GET users listing. */
router.get('/', catController.categorias);

module.exports = router;
