const self = {};

self.categorias = function(req,res,next){
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

  res.render('indexCat', {categorias:categorias});
};

module.exports = self;