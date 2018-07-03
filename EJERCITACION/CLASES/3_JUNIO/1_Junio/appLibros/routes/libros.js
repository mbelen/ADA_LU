var express = require('express');
var router = express.Router();
var libros = [
  {
  	nombre:"Cómo encender un dragón apagado",
  	isbn:"978-84-946744-9-5",
  	precio:10,
  	img:"/images/libroUno.jpg",
  	blurb:"Cupcake ipsum dolor sit. Amet jelly apple pie tootsie roll gummies lemon drops cotton candy topping. Ice cream marshmallow cake lollipop candy canes cotton candy. Sweet roll gingerbread bear claw sweet muffin icing."
  },
  {
  	nombre:"Gran Bot, Pequeño Bot",
  	isbn:"978-84-345744-5-2",
  	precio:15,
  	img:"/images/libroDos.jpg",
  	blurb:"Jelly-o pudding marzipan jelly-o oat cake cookie candy canes donut pudding. Gingerbread biscuit jelly fruitcake marshmallow tootsie roll ice cream apple pie halvah. "
  },
  {
   	nombre:"El dios dinero",
  	isbn:"978-84-478476-5-8",
  	precio:20,
  	img:"/images/libroTres.jpg",
  	blurb: "Gummi bears candy canes cotton candy jujubes danish soufflé bonbon fruitcake tart. Halvah chocolate bar bear claw chocolate bar macaroon bonbon dragée pudding sesame snaps." 	
  },
  {
   	nombre:"Aura",
  	isbn:"978-84-482296-3-9",
  	precio:20,
  	img:"/images/libroCuatro.jpg",
  	blurb: "Cake fruitcake icing pie marzipan halvah. Chocolate bar fruitcake sweet tiramisu cake candy canes croissant gummies liquorice. " 	
  }
	];


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('indexLibros', {libros:libros});
});

router.get('/:isbn', function(req, res, next){
	let idLibro = req.params.isbn;
	for(i=0;i<libros.length;i++){
		if(idLibro===libros[i].isbn){
			console.log("I'm working");
			res.render('viewLibros',{nombre:libros[i].nombre, isbn:libros[i].isbn, imagen:libros[i].img, precio:libros[i].precio, blurb:libros[i].blurb});
		}else{
      res.render('error'); //atrapo el 404, lo puedo tunear, pasarle un mensaje
    }
	}
});

router.get('/delete/:isbn', function(req,res,next) { //opción b router.get('/delete/:isbn', function(req,res,next){})
  var idLibro = req.params.isbn;
    for(i=0;i<libros.length;i++){ //podría hacer una función con esto y retornar el libro en cuestión (o null o lo que sea si no hay libro). Así no tendría que repetirlo en ambos métodos
      if(idLibro===libros[i].isbn){
        libros.splice(i,1);      
    }
  }
  res.render('indexLibros', {libros:libros});
  next(createError())
});

router.get('/put/:isbn'), function (req,res,next){

}

module.exports = router;
//Buscá el método filter

//Los scripts estáticos los linkeo en el layout. También los puedo separar por bloque funcional
//Si quiero resolver el delete/edit con un listener al botón, tengo que generar un js estático que me llame el método a través de una llamada ajax