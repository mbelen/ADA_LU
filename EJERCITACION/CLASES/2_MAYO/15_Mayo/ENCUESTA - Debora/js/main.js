localStorage.clear()

var arrayVotos = [
	[{value:0,	votos:0},{value:1,votos:0},{value:2,votos:0}],
	[{value:0,	votos:0},{value:1,votos:0},{value:2,votos:0}],
	[{value:0,	votos:0},{value:1,votos:0},{value:2,votos:0}],
	[{value:0,	votos:0},{value:1,votos:0},{value:2,votos:0}],
]

var datosGuardados = JSON.parse(localStorage.getItem("jsonDatos"));
if(datosGuardados){
    arrayVotos=datosGuardados.voto;
}

$.ajax({
		url: "http://www.mariabelenalegre.com/api-encuenta/api.php",
		type: "get",
		}).done(function (mensaje) {
			console.log(mensaje)
			var parseado = JSON.parse(mensaje);
			console.log(parseado)
			$.each(parseado, function (index, e) {
				var node = `<label class="enunciado">${e.enunciado}</label>`;
				$("#pregunta" + index).append(node);

				for (i = 0; i < e.respuestas.length; i++) {
					var radio = `<label class="respuesta"><input type="radio" name="opcion${index}" value="${i}"/>
						${e.respuestas[i]}</label>`
					$("#pregunta" + index).append(radio);
				}
				var boton = `<button class="votar" id="${index}">Votar</button>`;
				$("#pregunta" + index).append(boton);
	})

	$("button").on("click", function (event) {
		event.preventDefault();
		var botonId = this.id;
		var respuestaSeleccionada=$('input:radio[name=opcion'+botonId+']:checked').val();
		if(respuestaSeleccionada){
			arrayVotos[botonId][respuestaSeleccionada].votos++;
			var objJson={
			"voto": arrayVotos,
			}
			localStorage.setItem("jsonDatos",JSON.stringify(objJson));		
		}
		else{
			alert("Seleccione una opción")
		}
	})

	$("#verVotos").on("click", function(){
		$("#divVotos").empty();

		$.each(arrayVotos, function (index, e) {

			let cantVotos=0;
			let masELegida;
			let masElegidaRepe;
			$.each(e, function (index, elem) {
				if(elem.votos>cantVotos){
					cantVotos = elem.votos;
					masELegida=elem.value;
					masElegidaRepe;
				}else if(elem.votos===cantVotos){
					cantVotos = elem.votos;
					masElegidaRepe=elem.value;
				}

			})
			if(cantVotos!=0){
				var pregunta=`<p>${ parseado[index].enunciado}</p>`;
				var respuesta=`<p>${ parseado[index].respuestas[masELegida]}. votos: ${cantVotos}</p>`;
				$("#divVotos").append(pregunta,respuesta);
				if(masElegidaRepe!=undefined){
					var respuesta=`<p>${ parseado[index].respuestas[masElegidaRepe]}. votos: ${cantVotos}</p>`;
					$("#divVotos").append(respuesta);
				}}
				if(empateTotal=true){
					console.log("WHY")
				}		
			}
		}
	})
