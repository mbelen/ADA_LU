function validar(e) {
	e.preventDefault();
	console.log("si podés leer esto, 'validar' está siendo llamada")
	var nombre = $("#nombre").val();
	var apellido = $("#apellido").val();
	var mail = $('#mail').val();
	



	if(nombre.length==0 || apellido.length==0 || mail.length==0){

		let errores = $('#error');
		$.each(errores,function(indice,elemento){

			elemento.textContent = "¡Completá todos los campos obligatorios!";
			console.log(elemento);

	});
		return false; //una versión alternativa de lo mismo sería if(nombre.length!=0 && apellido.length !=0 && mail.length !=0 y return=true)
	}

	/*genero.forEach(function(indice,e){

		if(e.checked) {
			console.log("yay");
		}

	})*/
var genero = $('.genero');
	console.log(genero)
$.each(genero, function(indice,elemento) {
	console.log(elemento)
	if(elemento.checked==true) {
		console.log("yay")
	}
		
});

return true



}

$('#enviar').on('click', validar)