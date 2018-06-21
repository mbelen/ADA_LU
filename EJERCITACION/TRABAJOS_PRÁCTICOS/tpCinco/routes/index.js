var express = require('express');
var router = express.Router();
var controllerIndex = require('../controllers/controllerIndex');

/* GET home page. */
router.get('/', controllerIndex.cargarTodos);
router.get('/views/:id', controllerIndex.cargarVista)
module.exports = router;
