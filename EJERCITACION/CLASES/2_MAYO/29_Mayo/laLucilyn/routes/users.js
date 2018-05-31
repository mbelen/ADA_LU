var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('cambié el texto de usuarios wiiiiii');
});

router.get('/lucilyn', function(req, res, next) {
  res.send('puse otra ruta wiiiiii');
});

router.get('/marmota', function(req, res, next) {
	console.log(req)
  res.send('escribiste "marmota" en la ruta. Fijate');
});

module.exports = router;
