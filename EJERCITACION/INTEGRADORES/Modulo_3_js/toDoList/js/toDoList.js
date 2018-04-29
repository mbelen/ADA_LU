var ArrayTareas = [];


//Agrego tarea y botones
function AgregarTarea(){
	var ValorInput = $('#inputId').val();
	if($('#inputId').val() !== "") {
	ArrayTareas.push(ValorInput);
	console.log(ArrayTareas)
	var liItem = '<li id="'+ArrayTareas.length+'"><span id="span'+ArrayTareas.length+'">'+ValorInput+'</span></li><i class="far fa-trash-alt eliminar" data-id="'+ArrayTareas.length+'"></i><i class="far fa-edit editar" data-id="'+ArrayTareas.length+'"></i></div></div>'
	var input = '<input type="text" class="ocultar" value="'+ValorInput+'" id="i'+ArrayTareas.length+'"/><i class="ocultar" id="b'+ArrayTareas.length+'"></i>'
	var boton = $("#b"+ArrayTareas.length)
	boton.hide()
	$('#lista').append(liItem);
	$("#" + ArrayTareas.length).append(input)
	$('#inputId').val("")
}
}


//Función para editar contenido
$(document).on("click", ".editar", function(e) {
	
	var data = $(this).data('id')
	console.log(data)
	var esteli = $('#'+data)
	console.log(esteli.html())
	console.log('#i')
	var esteinput = $('#i'+data);
	esteinput.attr("class", "show")
	var esteboton = $("#b"+data)
	esteboton.attr("class","show fas fa-check edit")
	var estespan = $('#span'+data)
	estespan.hide()
	var yomismo = $(this)
	yomismo.hide()
	yomismo.prev().hide()
	var boton = $("#b"+data)
	boton.show()
	

	//Enviar contenido editado
	$(".edit").on('click', function (e) {
		console.log("si estás leyendo esto, el botón se clickeó")
		estespan.show()
		esteinput.attr("class", "ocultar")
		$(this).hide()
		yomismo.show()
		yomismo.prev().show()
		var textonuevo = esteinput.val()
		console.log(textonuevo)
		estespan.text(textonuevo)
	})

})

//Borro tarea
$(document).on("click", ".eliminar", function(e) {
	var data = $(this).data('id')
	console.log(data)
	var esteli = $('#'+data)
	esteli.remove()
	var esteinput = $('#i'+data);
	esteinput.remove()
	var estespan = $('#span'+data)
	estespan.remove()
	var yomismo = $(this)
		
		yomismo.next().remove()
		yomismo.remove()
	})


$('#agregar').on('click',AgregarTarea);
