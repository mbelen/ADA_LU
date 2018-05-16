
var cumplesStorage = localStorage.getItem("cumples");
var cumples = JSON.parse(cumplesStorage).cumples;
console.log(cumples);

function cumpledelDia() {

if(cumples.length == 0){

		return alert("No hay cumpleaños cargados");
	
	}else{
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
}

function proximosCumples(){
	let h2 = "<h2>Próximos cumpleaños</h2>"
	$('#lista').append(h2);	
	$.each(cumples,function(index,elem){

		let li = `<li><span>${elem.cumple}
				  ${elem.nombre}</span>
				  <button class="borrar" 
				  data-id="${index}">borrar</button></li>`;
		$('#lista').append(li);		

	});
}	

$(document).on('click','ul button',function(e){

	e.preventDefault();
	let li = $(this);
	li.parent().remove(); 
	let indice = li.data('id');
	cumples.splice(indice,1);	
	console.log(cumples)
	cumples.total = cumples.length;
	console.log(cumples.total);
	let datos = {
	"cumples": cumples,
    "total": cumples.length,
	}
	let data = JSON.stringify(datos);
	console.log(data);
	localStorage.setItem("cumples",data);
});



cumpledelDia()
proximosCumples()