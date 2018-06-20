var express = require('express');
var router = express.Router();
var fileUpload = require('express-fileupload');
var imagenes = [
{
	ruta:"/images/alfombra.jpg",
	mensaje:"Muy probablemente el mejor perro del mundo"
},
{
	ruta:"/images/house.jpg",
	mensaje:"Dr. House <3"
},
{
	ruta:'/images/michu.jpg',
	mensaje:"Tutuca"
}

];
/* GET home page. */
router.get('/', function(req,res){
	res.render('index', {imagenes:imagenes});
})

router.post('/upload', function(req,res){
	let imagen = req.files.miImagen
	let nombreImagen = req.files.miImagen.name;
	let rutaImagen = '/images/' + nombreImagen;
	let mensaje = req.body.miMensaje;
    var posteo = {}
    posteo.ruta = rutaImagen;
    posteo.mensaje = mensaje;
    imagenes.unshift(posteo);
    console.log(imagenes);
	imagen.mv('./public/images/' + nombreImagen);
res.redirect('/')
})
module.exports = router;
