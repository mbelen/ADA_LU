var express = require('express');
var router = express.Router();
var controllerIndex = require('../controllers/controllerIndex');

/* GET home page. */
router.get('/', controllerIndex.renderHome);
router.post('/favoritos', controllerIndex.enviarRespuesta)
router.get('/vistas', controllerIndex.renderizar)
router.get('/:page', controllerIndex.renderizar);
router.get('/views/:id', controllerIndex.cargarVista);
router.post('/views', controllerIndex.filtrarForm);
router.get('/views/filtro/:page', controllerIndex.renderizar);
module.exports = router;
