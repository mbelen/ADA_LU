/*Ejercicio 1: Escribir una función que dado 
un número X (base) y un número N (potencia), devuelva el resultado de realizar XN.*/

function potencia(x,n) {
var guardox = x;	
for(i=1; i<n; i++) {
	x=x*guardox;
}
return x;
}

var resultado = potencia(5,9);
console.log(resultado);


/*Ejercicio 4: Escribir una función que dado un arreglo con los siguientes datos:
Corredor = { “Nombre”,”Apellido”,edad,”genero” } retorne la categoría a la cual estará anotado por ejemplo:
F 18 – 25, M 18 – 25*/

Corredor = [juan,Perez,40,M];

if(Corredor[2]>18 && corredor[2]<25) {
	catA = "18-25";
}

if(Corredor[2]>25 && Corredor[2]<50) {
	catA = "25 - 50";
}