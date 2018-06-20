function palindromo(word){
	var inverse = word.split("").reverse().join('').toString().toUpperCase().split(' ').join('')
	var straight = word.split("").join('').toString().toUpperCase().split(' ').join('')
	return inverse === straight;
};

console.log(palindromo("anita lava la tina"));
console.log(palindromo("no soy un palindromo"));
console.log(palindromo('No lo cases a Colon'))

//los caracteres especiales debiste quitarlos con expresiones regulares

// 2) Write a sum method which will work properly when invoked using either syntax below.
// console.log(sum(2,3)) // 5
// var add2 = sum(2)
// console.log(add2(3)) //5 (edited)

function sum(a,b=0){
	if(b){
		return a+b;
	}else{
		return function(x){
			return a+x;
		}
	}
};

console.log(sum(2,3));
var add2 = sum(2);
console.log(add2(3));

//Aplicación parcial. Primero le paso un parámetro y después la puedo ejecutar con ese y pasando otro parámetro. Serviría xej en un caso de costos fijos + costos variables
//Googleá paradigma funcional (o functional programming).

var miArray = [9,4,3,6,4320,7,2,0,1,2,5,8,154,11,23]
var prueba = [0,1,2,3,5,4]
function burbujeo(array){
	for(j=0;j<array.length;j++){
		var listo=true;
		for(i=0;i<array.length-j;i++){
			if(array[i]>array[i+1]){
				slot = array[i];
				array[i] = array[i+1];
				array[i+1] = slot;
				listo=false;
			}
		}
		if(listo){
			console.log("j = "+j+" i = "+i)
			return array
		}
	};
	return array
};
//Podria haber puesto la bandera en el for
console.log(burbujeo(prueba));
