var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	var favoritos = [
  {	
  	nombre:"Item 1",
  	precio:5,
  	img:"/images/img1.jpg",
  	codigo:"1"
  },
  {
  	nombre:"item 6",
  	precio:10,
  	img:"/images/img6.jpg",
  	codigo:"6"
  },
  {
  	nombre:"item12",
  	precio:15,
  	img:"/images/img12.jpg",
  	codigo:"12"
  },
  {
  	nombre:"item17",
  	precio:20,
  	img:"/images/img17.jpg",
  	codigo:"17"
  },
  {
  	nombre:"item21",
  	precio:25,
  	img:"/images/img21.jpg",
  	codigo:25
  }]	

  res.render('index', {favoritos:favoritos});
});


module.exports = router;
