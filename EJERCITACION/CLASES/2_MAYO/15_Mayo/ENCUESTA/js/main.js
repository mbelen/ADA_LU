//localStorage.clear();

console.log("cargado");
var misVotos = [
{
	pregunta:"¿Para qué se usan mixins?",
	opcion0:0,
	opcion1:0,
	opcion2:0,
},
{
	pregunta:"¿Cuál es la diferencia entre children y find?",
	opcion0:0,
	opcion1:0,
	opcion2:0,
},
{
	pregunta:"¿Dónde deben cargarse los scripts en el html?",
	opcion0:0,
	opcion1:0,
	opcion2:0,

},
{	
	pregunta:"¿Qué es NPM?",
	opcion0:0,
	opcion1:0,
	opcion2:0,

}];

var recuperoDatos = JSON.parse(localStorage.getItem("datosGuardados"));
if(recuperoDatos){
    misVotos=recuperoDatos;
}
console.log(misVotos);

$.ajax({
  url: "http://www.mariabelenalegre.com/api-encuenta/api.php",
  type: "get",
	}).done(function(mensaje){
		console.log(mensaje);
		var parseado = JSON.parse(mensaje); 
		console.log(parseado)
		$.each(parseado, function(index,e){ 
			console.log(e)

			// var node = `<label class="enunciado">${e.enunciado}</label>`;
			// $("#pregunta"+index).append(node);

			// for(i=0;i<parseado[index].respuestas.length;i++){
			// 	var radio = `<label class="respuesta"><input type="radio" name="opcion${index}" value="${index}${i}"/>${parseado[index].respuestas[i]}</label></div>`
			// 	$("#pregunta"+index).append(radio);
				
			// }
			// var boton = `<button class="votar" id="boton${index}">Votar</button>`;
			// $("#pregunta"+index).append(boton);			
		})
		
		$("button").on("click", function(event){
			event.preventDefault();
			var botonId = $(this).attr('id');
			var numeroBoton = botonId.slice(-1);
			console.log(numeroBoton)
			// console.log("tocaste un botón");
			// 
            var inputsRespuesta = $(this).siblings();
            var respuestaSeleccionada = inputsRespuesta.find("input:checked").val();
            var textoRespuesta = inputsRespuesta.find("input:checked").parent().text();
            //console.log(textoRespuesta);

	            if(respuestaSeleccionada === numeroBoton+"0"){
	            	misVotos[numeroBoton].opcion0++;
	            }else if(respuestaSeleccionada === numeroBoton+"1"){
	            	misVotos[numeroBoton].opcion1++;
  				}else if(respuestaSeleccionada === numeroBoton+"2"){
	            	misVotos[numeroBoton].opcion2++;
	            }else{
	            	console.log("no seleccionaste nada")
	            }
        	        	
        	let datosString= JSON.stringify(misVotos);
        	localStorage.setItem("datosGuardados", datosString)
		});
})

function ordenarVotos(){
	$.each(misVotos, function(key,value){
		var votA = ["opcion0", value.opcion0];
		var votB = ["opcion1", value.opcion1];
		var votC = ["opcion2",value.opcion2];
		var arrayVotos = [votA,votB,votC];
		arrayVotos.sort(function(a, b){return b[1]-a[1]});
		console.log(arrayVotos);
	}) 
}

ordenarVotos()
