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


