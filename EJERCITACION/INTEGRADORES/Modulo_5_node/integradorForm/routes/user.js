var express = require('express');
var router = express.Router();
var controller = require('../controllers/controllerUser')

/* GET form */
router.get('/form', controller.renderForm);
/* GET users listing. */
router.get('/list', controller.renderList);
/* POST datos del nuevo usuario */
router.post('/', controller.nuevoUsuario);
module.exports = router;
