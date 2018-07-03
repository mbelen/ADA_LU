var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //va a buscar una vista que se llame "index" en el directorio de vistas y la compila con Jade.
});

module.exports = router;
