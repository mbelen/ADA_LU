var express = require('express');
var router = express.Router();
var controllerIndex = require('../controllers/controllerIndex');

/* GET home page. */
router.get('/', controllerIndex.cargarTodos);
router.get('/views/:id', controllerIndex.cargarVista);
router.post('/views', controllerIndex.filtrarForm)
module.exports = router;
