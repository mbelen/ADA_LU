/**
Consigna crear un arreglo de objetos que sean animales e incluyan
los datos: patas-nombre-comida-saludar-vuela. 
Validar que si tienen más de 4 patas y son hervíboros, suben al arca.
**/

var animales = [

{
	patas:4,
	nombre:"Gato",
	comida:"Carnívoro",
	saludar:function() {
		console.log("hola, soy " + this.nombre)
	},
	vuela:false
},

{
	patas:0,
	nombre:"Ballena",
	comida:"Carnívoro",
	saludar:function() {
		console.log("hola, soy " + this.nombre)
	},
	vuela:false
},

{
	patas:4,
	nombre:"Jirafa",
	comida:"Hervíboro",
	saludar:function() {
		console.log("hola, soy " + this.nombre)
	},
	vuela:false
},

{
	patas:4,
	nombre:"Conejo",
	comida:"Hervíboro",
	saludar:function() {
		console.log("hola, soy " + this.nombre)
	},
	vuela:false
},

{
	patas:2,
	nombre:"Paloma",
	comida:"Hervíboro",
	saludar:function() {
		console.log("hola, soy " + this.nombre)
	},
	vuela:true
}
]

for(i=0;i<animales.length;i++) {
	if(animales[i].patas>=2 && animales[i].comida =="Hervíboro"){
		console.log(animales[i].nombre + " sube al arca");
	}
	else{
		console.log(animales[i].nombre + " no sube al arca");
	}
}
