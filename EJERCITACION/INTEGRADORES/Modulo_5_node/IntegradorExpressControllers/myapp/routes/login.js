var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');

//Renderiza la página de login
router.get('/', loginController.renderLogin);

//Renderiza la página de registro
router.get('/registrarse', loginController.renderRegistro);

//Registra usuario y redirecciona a login
router.post('/newuser', loginController.newUser);

//Envía a la página de login
router.post('/ingreso', loginController.loginUser);


module.exports = router;
