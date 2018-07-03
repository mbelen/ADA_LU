var express = require('express');
var router = express.Router();

var nenas = ['Isabel','Eduviges','Solange','Fernanda']
var nenes = ['Bartolomeo','Segismundo','Oliverio','Aurelio']
var todes = nenas.concat(nenes);
/* GET users listing. */
router.get('/', function(req, res, next) {
  var numRandom = Math.floor((Math.random() * todes.length));	
  res.render('nombresIndex', {nombre:todes[numRandom], clase:"none"});
});

router.get('/nenas', function(req, res, next) {
  var numRandom = Math.floor((Math.random() * nenas.length));	
  res.render('nombresIndex', {nombre:nenas[numRandom], clase:"rosa"});
});

router.get('/nenes', function(req, res, next) {
  var numRandom = Math.floor((Math.random() * nenes.length));	
  res.render('nombresIndex', {nombre:nenes[numRandom], clase:"celeste"});
});
module.exports = router;
