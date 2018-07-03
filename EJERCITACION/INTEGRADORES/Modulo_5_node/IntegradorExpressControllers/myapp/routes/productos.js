var express = require('express');
var router = express.Router();
var prodController = require('../controllers/prodController');
	
/* GET users listing. */
router.get('/', prodController.renderIndex);

router.get('/:id', prodController.renderProduct);

router.get('/categorias/:id', prodController.renderCategorias);

module.exports = router;
