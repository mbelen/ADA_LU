var express = require('express');
var router = express.Router();
var categorias = [
	{
		nombre:"bolsos",
		img:"/images/catBag.jpg"},
	{
		nombre:"aros",
		img:"/images/catEars.jpg"
	},
	{
		nombre:"relojes",
		img:"/images/catWatch.jpg"
	},
	{
		nombre:"collares",
		img:"/images/catNeck.jpg"
	},
	{	nombre:"anillos",
		img:"/images/catRing.jpg"}
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('indexCat', {categorias:categorias});
});

module.exports = router;
