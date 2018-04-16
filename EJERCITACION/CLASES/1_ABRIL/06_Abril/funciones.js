/* Generar funcion de login */
/* Devuelva true en caso de logeo y false en caso contrario*/
/* Crear un array de usuarios y otro de contraseñas (2 arrays), y validar */

var uno = [1,2,3,4,5];
var dos = ["a","b","c","d"];
var cont = 0
var uni = 2;
var dis = "b";

function login(uni,dis) {
while(cont>=0 && cont<uno.length) {
	if(uni == uno[cont] && dis == dos[cont]) {
		
		return true;

	}
	else {
		
		return false;
		
	}
cont++;
}
}

var ingresar = login(uni,dis);

if(ingresar == false) {
	console.log("wtf");
}
