/*
Ejercicio 1 – Un sistema de fidelización de usuarios 
implementa la siguiente regla para la adquisición de productos 
del catálogo. Se pide determinar la lógica de canje.
- El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
- Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza 
directamente el canje.
- Si el cliente tiene el 50% de los puntos requeridos, podrá completar 
el canje con dinero, en ese caso cada peso equivaldrá a 3 puntos.
- Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría 
premium, la relación pesos puntos será 1 a 5.*/

var x=40;
var puntos=20;
var premium=false;
console.log("Ejercicio 1");

if(puntos>=x) {
	console.log("Puede retirar el producto");
}

else if(puntos*2>=x) {
	var diferencia=x-puntos;
	if(premium) {
		var monto=diferencia / 5;
		console.log("Total a pagar: $" + monto);
	
	}else {
		var monto=diferencia / 3; 
		console.log("Total a pagar: $" + monto);
	}
}

else {
	console.log("No se puede hacer la transacción");
}

/*Ejercicio 2 - Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, para tomar 
la decisión tiene en cuenta distintas variables.
A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, por lo que 
para elegir esta opción el costo mensual deberá ser menor a $1500.
B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%, 
con lo cual evaluará incluir almuerzo en la colonia si este no excede el 15% del valor 
de la cuota.
C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a 
$1500, pero es doble turno y le brinda almuerzo, está dispuesta a pagar hasta $2800.*/

console.log("Ejercicio 2");

var distancia = 20;
var costo = 2700;
var dobleTurno = true;
var costoAlmuerzo = 34;

if(distancia>10){
	if(dobleTurno==true){
		if(costo<2800){
			console.log("Doble turno y menos de $2800. Puede ir");
		}else{
			console.log("Es muy cara");
		}
	}
	else {
		if(costo<1500){
		console.log("Menos de 10km y menos de $1500. Puede ir");
		}else{console.log("Es muy cara");}
	}
}

else{
	var presupuesto = 1500 * 1.2;
	if(costo<presupuesto){
		if(costoAlmuerzo<presupuesto*0.15) {
			console.log("Compramos almuerzo");
		}else {
			console.log("No compramos almuerzo");
		}

	}else {
		console.log("Muy cara");
	}

}
