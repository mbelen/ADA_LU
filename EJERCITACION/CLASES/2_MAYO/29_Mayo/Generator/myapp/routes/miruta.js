var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexruta', { title: 'Soy el index de la ruta', 
  	content: 'hice una ruta nueva y creé una variable nueva para pasarle y todo',
  	verduras:["verdura", "otra verdura", "otra otra verdura"],
  	imagenes:["images/ficha1.jpg","images/ficha2.jpg","images/ficha3.jpg","images/ficha4.jpg","images/ficha5.jpg", "images/ficha6.jpg"]
});
});
router.get('/lucilyn', function(req, res, next) {
  res.send("Lucilynception");
});



module.exports = router;
