var express = require('express');
var router = express.Router();

/* GET random number. */
router.get('/', function(req, res, next) {

  let number = random(); //llama a la función de la línea 24

  res.render('random', { title: 'The winner is', number: number});
});


/* GET random number with custom limit. */
router.get('/:limit', function(req, res, next) { //declaré un parámetro
  let number = randomCustom(req.params.limit); //cuando tenga un get con un parámetro voy a llamar a la función de la línea 32
  if(isNaN(number)) {
  	res.render('random',{ title: 'Yo no soy un número', number:'Inserte un número =)'},);
  }else{
  	res.render('random', { title: 'The winner is', number: number})
  };
});

// Random de 0 a 10

function random(){

	return Math.floor((Math.random() * 10));

}

// Random de 0 al limite pasado por parametro

function randomCustom(limit){

	return Math.floor((Math.random() * limit));

}



module.exports = router; //Exporto el módulo router