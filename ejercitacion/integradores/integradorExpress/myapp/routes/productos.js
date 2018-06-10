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
		img:"/images/catRings.jpg"}
];
var productos = [
{	
	nombre:"Item 1",
	precio:5,
	img:"/images/img1.jpg",
	cod:"1",
	cat:categorias[0].nombre
},
{	
	nombre:"Item 2",
	precio:95,
	img:"/images/img2.jpg",
	cod:"2",
	cat:categorias[0].nombre
},
{	
	nombre:"Item 3",	
	precio:85,	
	img:"/images/img3.jpg",
	cod:"3",
	cat:categorias[0].nombre
},
{	
	nombre:"Item 4",
	precio:75,
	img:"/images/img4.jpg",
	cod:"4",
	cat:categorias[0].nombre
},
{	
	nombre:"Item 5",
	precio:75,
	img:"/images/img5.jpg",
	cod:"5",
	cat:categorias[0].nombre
},
{
	nombre:"item 6",
	precio:10,
	img:"/images/img6.jpg",
	cod:"6",
	cat:categorias[1].nombre
},
{	
	nombre:"Item 7",
	precio:65,
	img:"/images/img7.jpg",
	cod:"7",
	cat:categorias[1].nombre
},
{	
	nombre:"Item 8",
	precio:55,
	img:"/images/img8.jpg",
	cod:"8",
	cat:categorias[1].nombre
},
{	
	nombre:"Item 9",
	precio:45,
	img:"/images/img9.jpg",
	cod:"9",
	cat:categorias[1].nombre
},
{	
	nombre:"Item 10",
	precio:35,
	img:"/images/img10.jpg",
	cod:"10",
	cat:categorias[1].nombre
},
{	
	nombre:"Item 11",
	precio:25,
	img:"/images/img11.jpg",
	cod:"11",
	cat:categorias[2].nombre
},

{
	nombre:"item 12",
	precio:15,
	img:"/images/img12.jpg",
	cod:"12",
	cat:categorias[2].nombre
},
{	
	nombre:"Item 13",
	precio:10,
	img:"/images/img13.jpg",
	cod:"13",
	cat:categorias[2].nombre
},
{	
	nombre:"Item 14",
	precio:65,
	img:"/images/img14.jpg",
	cod:"14",
	cat:categorias[2].nombre
},
{	
	nombre:"Item 15",
	precio:10,
	img:"/images/img15.jpg",
	cod:"15",
	cat:categorias[2].nombre
},
{	
	nombre:"Item 16",
	precio:30,
	img:"/images/img16.jpg",
	cod:"7",
	cat:categorias[3].nombre
},
{
	nombre:"item17",
	precio:20,
	img:"/images/img17.jpg",
	cod:"17",
	cat:categorias[3].nombre
},
{
	nombre:"item18",
	precio:40,
	img:"/images/img18.jpg",
	cod:"18",
	cat:categorias[3].nombre
},
{
	nombre:"item19",
	precio:60,
	img:"/images/img19.jpg",
	cod:"19",
	cat:categorias[3].nombre
},
{
	nombre:"item 20",
	precio:90,
	img:"/images/img20.jpg",
	cod:"20",
	cat:categorias[3].nombre
},
{
	nombre:"item21",
	precio:25,
	img:"/images/img21.jpg",
	cod:"21",
	cat:categorias[4].nombre
},
{
	nombre:"item 22",
	precio:22,
	img:"/images/img22.jpg",
	cod:"22",
	cat:categorias[4].nombre
},
{ 	
	nombre:"item 23",
	precio:25,
	img:"/images/img23.jpg",
	cod:"23",
	cat:categorias[4].nombre
},
{	
	nombre:"item 24",
	precio:24,
	img:"/images/img24.jpg",
	cod:"24",
	cat:categorias[4].nombre
},
{	
	nombre:"item 25",
	precio:25,
	img:"/images/img25.jpg",
	cod:"22",
	cat:categorias[4].nombre
},
];
	
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('indexProd', {productos:productos, categorias:categorias});
});

router.get('/:id', function(req,res,next){
let idProd = req.params.id;	
console.log(idProd)
for(i=0;i<productos.length;i++){
	if(idProd===productos[i].cod){
		res.render('indexVista', {producto:productos[i]})
	}
}
});

router.get('/categorias/:id', function(req,res,next){
let idgen = req.params.id;
var productosFiltrados = productos.filter(function(item){
	return item.cat===idgen;
});
	res.render('indexProd', {productos:productosFiltrados, categorias:categorias})
	})
module.exports = router;
