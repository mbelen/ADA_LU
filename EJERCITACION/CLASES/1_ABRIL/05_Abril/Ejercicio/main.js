/*Escribir la frecuencia de fibronacci*/
/*
Versión con "for" vista en clase

var cont=0;
var x=1;
var y=0;

for(var i=0; i <10; i++) {
	console.log(cont);
	y=cont;
	cont=cont+x;
	x=y;
}*/


/*Versión con while que traté de hacer después de ver la versión con for
var x=1;
var y=0;
var z=0;
var i=0;

while(i<=9) {
	console.log(z);
	y=z;
	z=z+x;
	x=y;
	i++;
}*/

/*Versión con while vista en clase*/

var numero = 0;
var firstNum = -1;
var lastNum = 1;

while(numero < 34) {
	numero = firstNum + lastNum;
	firstNum = lastNum;
	lastNum = numero;
	console.log(numero);
}

