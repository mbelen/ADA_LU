const self = {};

//Creo el objeto con todos mis animales

let animales = [
{
nombre:"Nosferatu",
especie:"perro",
edad:"cachorro",
tamaño:"grande",
imagen:"/images/doge1.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Frankenstein",
especie:"perro",
edad:"cachorro",
tamaño:"grande",
imagen:"/images/doge2.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Dr. Jeckyll",
especie:"perro",
edad:"cachorro",
tamaño:"pequeño",
imagen:"/images/doge3.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Mr. Hyde",
especie:"perro",
edad:"cachorro",
tamaño:"grande",
imagen:"/images/doge4.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Elvira",
especie:"perro",
edad:"cachorro",
tamaño:"pequeño",
imagen:"/images/doge5.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Morticia",
especie:"perro",
edad:"cachorro",
tamaño:"pequeño",
imagen:"/images/doge6.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Merlina",
especie:"perro",
edad:"adulto",
tamaño:"grande",
imagen:"/images/doge7.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Ginger",	
especie:"perro",
edad:"adulto",
tamaño:"grande",
imagen:"/images/doge8.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Jason",
especie:"perro",
edad:"adulto",
tamaño:"grande",
imagen:"/images/doge9.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Freddy",
especie:"perro",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/doge10.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Alfombra",
especie:"perro",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/doge11.jpg",
descripcion:"Este perro tiene una descripción diferente porque es el más importante de todos los perros. Es Sir. Alfombra, es mi perro, no está, nunca estuvo y nunca estará a la venta y es muy probablemente el mejor perro del mundo. He dicho",
},
{
nombre:"Clover",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate1.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"The Thing",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate2.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Sadako",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate3.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Salem",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate4.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Buffy",	
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate5.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Xander",	
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate6.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Willow",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate7.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Cordelia",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate8.jpg",
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Lion",
especie:"gato",
edad:"adulto",
tamaño:"grande",
imagen:"/images/cate9.jpg",
descripcion:"Lion is a magical pink lion befriended by Steven that occasionally assists the Crystal Gems. Once a normal lion (presumably owned by Rose Quartz in the Desert hundreds of years ago), Lion eventually died through unknown means. Rose Quartz was able to resurrect Lion through her healing powers, giving Lion pink skin and magical abilities. After being entrusted with many of Rose's belongings, Lion roamed the Desert alone following Rose's departure until eventually being found by Steven."
},
{
nombre:"Gizmo",
especie:"gato",
edad:"cachorro",
tamaño:"grande",
imagen:"/images/cate10.jpg",
descripcion:"Cupcake ipsum dolor sit. Amet halvah gingerbread topping muffin cake chupa chups. Lemon drops dessert jelly-o sweet bear claw oat cake muffin jelly-o. Chocolate cake cookie macaroon."	
}]

self.cargarTodos = function(req,res,next){
	res.render('index', {animales:animales})
}

self.cargarVista = function(req,res,next){
	let miAnimal = req.params.id;	
	for(i=0;i<animales.length;i++){
		if(miAnimal===animales[i].nombre){
			var animal=animales[i]
		}
	}
	if(animal){
		res.render('indexVista', {animal:animal})
	}else{
		res.send('ups')
	}
}

self.filtrarForm = function(req,res,next){
	var especie = req.body.especie.toLowerCase();
	var edad = req.body.edad.toLowerCase();
	var tamaño = req.body.tamaño.toLowerCase();
	if(especie!="todas"){
		var filtroEspecie = animales.filter(function(item){return item.especie===especie});
	}else{
		var filtroEspecie = animales;
	};
	if(edad!="todas"){
		filtroEspecie = filtroEspecie.filter(function(item){return item.edad===edad})
	}//else{
	// 	filtroEspecie = filtroEspecie;
	// }
	if(tamaño!="todos"){
		filtroEspecie = filtroEspecie.filter(function(item){return item.tamaño===tamaño})
	}//else{
	// 	filtroEspecie = filtroEspecie;
	// }

res.render('index', {animales:filtroEspecie})
}

module.exports = self;