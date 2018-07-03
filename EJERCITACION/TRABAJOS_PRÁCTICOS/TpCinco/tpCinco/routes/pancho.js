var express = require('express');
var router = express.Router();
var createError = require('http-errors')
var controllerPancho = require('../controllers/controllerPancho');

/* GET home page. */
router.post('/favoritos', controllerPancho.obtenerFavorito);
/*Ruta a animal individual*/
router.get('/ficha/:id', controllerPancho.cargarVista);
/*Filtrado de formulario*/
router.post('/filtro', controllerPancho.filtrarForm);
/*Renderizado de página*/
router.get('/filtro/:page', controllerPancho.renderizar);
module.exports = router;
