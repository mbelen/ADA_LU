const service = {}

let animales = [
{
nombre:"Nosferatu",
especie:"perro",
edad:"cachorro",
tamaño:"grande",
imagen:"/images/doge1.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Frankenstein",
especie:"perro",
edad:"cachorro",
tamaño:"grande",
imagen:"/images/doge2.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Dr. Jeckyll",
especie:"perro",
edad:"cachorro",
tamaño:"pequeño",
imagen:"/images/doge3.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Mr. Hyde",
especie:"perro",
edad:"cachorro",
tamaño:"grande",
imagen:"/images/doge4.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Elvira",
especie:"perro",
edad:"cachorro",
tamaño:"pequeño",
imagen:"/images/doge5.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Morticia",
especie:"perro",
edad:"cachorro",
tamaño:"pequeño",
imagen:"/images/doge6.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Merlina",
especie:"perro",
edad:"adulto",
tamaño:"grande",
imagen:"/images/doge7.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Ginger",	
especie:"perro",
edad:"adulto",
tamaño:"grande",
imagen:"/images/doge8.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Jason",
especie:"perro",
edad:"adulto",
tamaño:"grande",
imagen:"/images/doge9.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Alfombra",
especie:"perro",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/doge11.jpg",
favorito:true,
descripcion:"Sipi. Totalmente incluí a mis mascotas en el TP. Doggo ipsum puggo such treat. Wow such tempt you are doin me a concern aqua doggo I am bekom fat vvv shoob, tungg long water shoob wrinkler long bois. floofs waggy wags shoob. Long bois heck heckin good boys wow such tempt stop it fren blep long water shoob doggo length boy, snoot fat boi you are doing me a frighten shoob bork clouds. Big ol pupper yapper sub woofer thicc puggorino very taste wow, you are doing me the shock floofs shibe clouds. Yapper heckin good boys and girls heckin angery woofer pupperino puggorino most angery pupper I have ever seen clouds ur givin me a spook, shibe smol borking doggo with a long snoot for pats yapper vvv lotsa pats long woofer. I am bekom fat noodle horse clouds boof, smol. Adorable doggo such treat length boy, boof. Borkf snoot wow such tempt wrinkler fat boi, pupperino such treat."	
},
{
nombre:"The Thing",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate2.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Salem",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate4.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Buffy",	
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate5.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Xander",	
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate6.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Willow",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate7.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit amet topping sesame snaps. Powder cupcake sweet. Dessert muffin sweet. Bear claw carrot cake ice cream croissant chocolate ice cream soufflé. Sweet lollipop jujubes muffin tootsie roll cookie pie. Cookie muffin croissant topping marshmallow tootsie roll cupcake marzipan. Candy canes muffin cookie bonbon jelly gingerbread carrot cake. Sesame snaps carrot cake chocolate bar apple pie chocolate cake marzipan. Jujubes gummies jelly-o. Bear claw cupcake icing oat cake powder. Jelly beans pudding gummi bears. Tiramisu pastry topping cake candy. Gummi bears chocolate croissant gummi bears.",
},
{
nombre:"Lion",
especie:"gato",
edad:"adulto",
tamaño:"grande",
imagen:"/images/cate9.jpg",
favorito:false,
descripcion:"Lion is a magical pink lion befriended by Steven that occasionally assists the Crystal Gems. Once a normal lion (presumably owned by Rose Quartz in the Desert hundreds of years ago), Lion eventually died through unknown means. Rose Quartz was able to resurrect Lion through her healing powers, giving Lion pink skin and magical abilities. After being entrusted with many of Rose's belongings, Lion roamed the Desert alone following Rose's departure until eventually being found by Steven."
},
{
nombre:"Dr. House",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate13.jpg",
favorito:true,
descripcion:"Sipi, totalmente incluí a mis mascotas en el tp. Doggo ipsum puggo such treat. Wow such tempt you are doin me a concern aqua doggo I am bekom fat vvv shoob, tungg long water shoob wrinkler long bois. floofs waggy wags shoob. Long bois heck heckin good boys wow such tempt stop it fren blep long water shoob doggo length boy, snoot fat boi you are doing me a frighten shoob bork clouds. Big ol pupper yapper sub woofer thicc puggorino very taste wow, you are doing me the shock floofs shibe clouds. Yapper heckin good boys and girls heckin angery woofer pupperino puggorino most angery pupper I have ever seen clouds ur givin me a spook, shibe smol borking doggo with a long snoot for pats yapper vvv lotsa pats long woofer. I am bekom fat noodle horse clouds boof, smol. Adorable doggo such treat length boy, boof. Borkf snoot wow such tempt wrinkler fat boi, pupperino such treat."
},
{
nombre:"Critter",
especie:"gato",
edad:"cachorro",
tamaño:"grande",
imagen:"/images/cate11.jpg",
favorito:false,
descripcion:"Cupcake ipsum dolor sit. Amet halvah gingerbread topping muffin cake chupa chups. Lemon drops dessert jelly-o sweet bear claw oat cake muffin jelly-o. Chocolate cake cookie macaroon."	
},
{
nombre:"Tutuca",
especie:"gato",
edad:"adulto",
tamaño:"pequeño",
imagen:"/images/cate12.jpg",
favorito:true,
descripcion:"Sipi. Totalmente incluí a mis mascotas en el TP. Doggo ipsum puggo such treat. Wow such tempt you are doin me a concern aqua doggo I am bekom fat vvv shoob, tungg long water shoob wrinkler long bois. floofs waggy wags shoob. Long bois heck heckin good boys wow such tempt stop it fren blep long water shoob doggo length boy, snoot fat boi you are doing me a frighten shoob bork clouds. Big ol pupper yapper sub woofer thicc puggorino very taste wow, you are doing me the shock floofs shibe clouds. Yapper heckin good boys and girls heckin angery woofer pupperino puggorino most angery pupper I have ever seen clouds ur givin me a spook, shibe smol borking doggo with a long snoot for pats yapper vvv lotsa pats long woofer. I am bekom fat noodle horse clouds boof, smol. Adorable doggo such treat length boy, boof. Borkf snoot wow such tempt wrinkler fat boi, pupperino such treat."	
}];

var favoritos = ["Alfombra","Tutuca","Dr. House"];

/**Retorna el array de animales completo**/
service.animales = function(){
	return animales
}

/*Retorna el array de favoritos*/
service.favoritos = function(){
	return favoritos
}

/*Agrega/quita favoritos según corresponda. Reescribe el array y la propiedad favorito de los animales*/
service.crearFavoritos = function(favorito){
	//Chequeo si ya está en el array de favoritos. Si es así, lo remuevo. Si no, lo incluyo
	var repetido = favoritos.indexOf(favorito);
	if(repetido >= 0){
        favoritos.splice(repetido, 1);
 	}else{
       	favoritos.push(favorito);
	}
	//Reseteo el atributo "favorito" en todos los animales
	for(i=0;i<animales.length;i++){
		animales[i].favorito=false;
	}
	//Vuelvo a recorrer el array de animales y marco como "favoritos" a los que sigan estando en el array de favoritos
	for(i=0;i<favoritos.length;i++){
		for(j=0;j<animales.length;j++){
			if(animales[j].nombre===favoritos[i]){
	 			animales[j].favorito=true;
 			}
	 	}
	}
}

/*Busca en el array de animales por parámetro y retorna el animal*/
service.buscar = function(item){
	for(i=0;i<animales.length;i++){
		if(item===animales[i].nombre){
			var animal=animales[i];
		}
	}
	return animal
}

module.exports = service;