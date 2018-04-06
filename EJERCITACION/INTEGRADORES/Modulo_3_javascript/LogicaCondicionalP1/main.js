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

/*5- Dada una variable que puede ser una letra, determinar si es una vocal.*/
console.log("Ejercicio 5:")

var letra="j";
switch(letra) {
	case "a":
	case "e":
	case "i":
	case "o":
	case "u":
	var vocal = true;
	console.log("Es vocal"); break;
	default: 
		var vocal = false;
		console.log("Es consonante"); break;
	}



/*6- Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y 
determinar si eso es mayor que y, de lo contrario sumar x y z (x+z) y 
multiplicarlo por y.*/

var x=14;
var y=12;
var z=5;
console.log("Ejercicio 6:");
/* Versión propia:
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
*/

/*Forma correcta*/
console.log("Resolucion hecha en clase, esta es la correcta:")

if(x>y) {
	w = x - z;
	console.log("x es mayor que y. x-z=" + w);

	if(w>y) {
		console.log("x-z es mayor que y");
	}
	
	else{
		w=(x+z)*y;
		console.log("x-z es menor que y (x+z)*y="+w);
	}
}

/*7- Que calcule el sueldo que le corresponde al 
trabajador de una empresa que cobra 40.000 euros anuales, 
se deben realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%*/

var sueldo = 40000;
var antig = 2;

switch(true) {
	case(antig>10): 
	var nuevoSueldo = sueldo * 1.1;
	console.log("El sueldo actualizado es $" + nuevoSueldo); break;
	case(antig<10 && antig>5):
	var nuevoSueldo = sueldo * 1.07;
	console.log("El sueldo actualizado es $" + nuevoSueldo); break;
	case(antig<5 && antig>3):
	var nuevoSueldo = sueldo * 1.05;
	console.log("El sueldo actualizado es $" + nuevoSueldo); break;
	case(antig<3):
	var nuevoSueldo = sueldo * 1.03;
	console.log("El sueldo actualizado es $" + nuevoSueldo); break;
}