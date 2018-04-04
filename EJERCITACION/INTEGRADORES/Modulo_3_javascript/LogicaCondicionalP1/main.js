/*1) Dada una variable "x" determinar si es par o impar*/

var x=57

if(x % 2 == 0) {
	var valor="Ejercicio 1: par";
	console.log(valor);
}

else {
	var valor="Ejercicio 1: impar";
	console.log(valor);
}

/*2) Dada una variable y que puede contener un número de 1 a 7, determinar a que día 
de la semana corresponde. 
Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).*/

var dia=9

switch(dia) {
	case 1:console.log("Ejercicio 2: Lunes"); break;
	case 2:console.log("Ejercicio 2: Martes"); break;
	case 3:console.log("Ejercicio 2: Miércoles"); break;
	case 4:console.log("Ejercicio 2: Jueves"); break;
	case 5:console.log("Ejercicio 2: Viernes"); break;
	case 6:console.log("Ejercicio 2: Sábado"); break;
	case 7:console.log("Ejercicio 2: Domingo"); break;
	default: console.log("Ejercicio 2: Por favor, inserte un número del 1 al 7"); break;
}

/*Dada una variable donde se ingresa el nombre del mes, 
devolver la cantidad de días correspondiente.*/

var mes="diciembre";

switch(mes) {
	case "enero":
	case "marzo":
	case "mayo":
	case "julio":
	case "agosto":
	case "octubre":
	case "diciembre": var dias=31;
	console.log("Ejercicio 3: " + mes + " tiene " + dias + " días."); break;
	case "abril":
	case "junio":
	case "septiembre":
	case "noviembre":var dias=30;
	console.log("Ejercicio 3: " + mes + " tiene " + dias + " días."); break;
	case "febrero": var dias=28;
	console.log("Ejercicio 3: " + mes + " tiene " + dias + " días."); break;
	default: 
	console.log("Ejercicio 3: Por favor, inserte un mes válido"); break; 
}

/*6- Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y 
determinar si eso es mayor que y, de lo contrario sumar x y z (x+z) y 
multiplicarlo por y.*/

var x=14;
var y=12;
var z=5;
console.log("Ejercicio 6:");

if(x>y){
	var resta=x-z;
	console.log("'x' es mayor que 'y' -> x-z="+resta);
}

else{
	console.log("'x' es menor que 'y'");
}


if(resta<y){
	var suma=(x+z)*y;
	console.log("La resta de 'x' y 'z' es menor que 'y' -> (x+z)*y="+suma);
}

else{
	console.log("La resta de 'x' y 'z' es mayor que y");
}


/*Forma correcta*/
console.log("Opción vista en clase, esta es la correcta")

if(x>y) {
	w = x - z;
	console.log("W es la resta " + w);
	
	if(w>y) {
		console.log("w es mayor que y: " + w);
	}
	
	else{
		w=(x+z)*y;
		console.log("w es menor que y: "+w);
	}
}

