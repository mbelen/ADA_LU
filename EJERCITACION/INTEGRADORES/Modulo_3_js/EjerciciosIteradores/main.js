//Ejercicio 1 - Cargar de forma automática incremental, 
//un array de números a partir de un largo dado por el usuario.

console.log("Ejercicio 1");

var n = 10

var numeros = [];

for(i=0; i<n; i++) {

numeros[i] = i;
console.log(numeros[i]);
}


//Ejercicio 2 - Repetir el ejercicio anterior, ubicando 0 (ceros), 
//en las posiciones pares y un valor que coincida con el índice 
//en las posiciones impares.

console.log("Ejercicio 2");

var n = 10;
var numeros = [];

for(i=0; i<n; i++) {
	if(i%2==0) {
		numeros[i] = 0;
		console.log(numeros[i]);
	}

	else {
		numeros[i] = i;
		console.log(numeros[i]);
	}
}

//Ejercicio 3 - Dado el siguiente arreglo de números 

//x = [10,24,36,7,98,11,14,20], mostrar por pantalla el valor máximo.

console.log("Ejercicio 3");

var x = [10,24,36,7,98,11,14,20];

var b = Math.max(...x);

console.log(b);

//Version mas copada vista en clase

var max = 0;

for(var i=0;i<x.length;i++) {
	if(numeros[i]>max) {
		max = numeros[i];
	}
}

console.log("El maximo es " +max);

//Ejercicio 4 - Dado el arreglo de números 
//del punto 3, mostrar por pantalla el valor máximo y su posición.

console.log("Ejercicio 4");
var c = x.indexOf(b);
console.log(+b, +c);

//Ejercicio 5 - Dado el siguiente arreglo de números 
//x = [10,24,36,7,98,11,14,20,98,14,10],  mostrar por pantalla 
//el valor máximo y la cantidad de veces que se repite.

console.log("Ejercicio 5");
var x = [10,24,36,7,98,11,14,20,98,14,10];
var repe = 0;

/*Ejercicio 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común*/

var x = ["a","l","f","a"];
var y = ["a","l","f","a","j","o","r"];
var iguales = false;


//Versión con función vista en clase
/*function comparar(x,y) {
	 if(x.length==y.length) {
	 	//son iguales
	 	for(i=0; i=x.length; i++) {
	 		if(x[i] != y[i]) {
	 			
	 			encomun(x,y);
	 			return "no son iguales "+"tiene" + encomun + " letras en comun";
	 		}
	 	}

	 return "Son iguales";
	 
	 }else {
	 if(x.length > y.length) {
	 	return "x es mayor que y"
	 }else{
	 	return "x es menor que y"
	 }
	}
	}

	function encomun(x,y) {
		var i,j;
		var cont = 0;
		igual=false;

		for(i=0; i<x.length;i++) {
			for(j=0; j<y.length;j++) {
				if(x[i] == y[j]) {
					igual=true;
				}
			}
			if(igual) {
				cont++;
				igual=false;
			}
		}
	return cont;
	} 
comparar(x,y)*/

/*Ejercicio 7 – Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] 
y datos2 = [“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
• ¿Cuál de los dos personajes es más viejo?
• ¿Cuál de los dos personajes está casado?
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, 
cuanto será el monto a cobrar?*/

datos1 = ["Fido","Gomez",26,15000.78,true]
datos2 = ["Gervasio","Fernandez",32,28000.550,true]

switch(true) {
	case datos1[3]==datos2[3]:console.log(datos1[0] +" es de la misma edad que" +datos2[0]);break;
	case datos1[3]<datos2[3]:console.log(datos1[0] +" es menor que " +datos2[0]);break;
	case datos1[3]>datos2[3]:console.log(datos1[0] +" es mayor que " +datos2[0]);break;
}

if(datos1[4]==true) {
	if(datos2[4]==true) {
		console.log("los dos están casados");
	}
	else {
		console.log("Solo " + datos1[0] + " está casado")
	}
}

else {
		if(datos2[4]==true) {
		console.log("Solo " + datos2[0] + " está casado");
	}
	else {
		console.log("Nadie está casado")
	}
}

function sueldoNuevo() {
	var sueldo1 = datos1[3]
	console.log(sueldo1)
	var sueldo2 = datos2[3]
	console.log(sueldo2)
	
	var porcentaje = sueldo2 * 0.125
	var sueldonuevo = porcentaje + sueldo1
	console.log(sueldonuevo)
	return sueldonuevo
	
}



sueldoNuevo()