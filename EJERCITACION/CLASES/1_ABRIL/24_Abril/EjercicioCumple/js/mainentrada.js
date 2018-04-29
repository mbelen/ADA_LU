var cumplesStorage = localStorage.getItem("cumples");
var cumples = JSON.parse(cumplesStorage).cumples;
console.log(cumples);


function cumpledelDia() {


let indice = Math.floor(Math.random() * (cumples.length));
console.log(indice);

	let cumpleHoyImg  = cumples[indice].gato;
	console.log(cumpleHoyImg)	
	let cumpleHoyName = cumples[indice].nombre;

	let h1 = `<h1>${cumpleHoyName}</h1>`;
	let img = `<img src="img/${cumpleHoyImg}.jpg">`;

	$('#lista').append(h1);
	$('#lista').append(img);
}


cumpledelDia()