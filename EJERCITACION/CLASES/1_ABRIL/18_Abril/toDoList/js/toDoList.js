var ArrayTareas = [];


//Agrego tarea y botones
function AgregarTarea(){
	var ValorInput = $('#inputId').val();
	ArrayTareas.push(ValorInput);
	console.log(ArrayTareas)
	var liItem = '<li id="'+ArrayTareas.length+'"><span id="span'+ArrayTareas.length+'">'+ValorInput+'</span></li><button class="eliminar" data-id="'+ArrayTareas.length+'">Borrar</button><button class="editar" data-id="'+ArrayTareas.length+'">Editar</button></div></div>'
	var input = '<input type="text" class="ocultar" value="'+ValorInput+'" id="i'+ArrayTareas.length+'"/><button class="ocultar" id="b'+ArrayTareas.length+'">Edit</button>'
	var boton = $("#b"+ArrayTareas.length)
	boton.hide()
	$('#lista').append(liItem);
	$("#" + ArrayTareas.length).append(input)
}

$(document).on("click", ".editar", function(e) {
	var data = $(this).data('id')
	console.log(data)
	var esteli = $('#'+data)
	console.log(esteli.html())
	console.log('#i')
	var esteinput = $('#i'+data);
	esteinput.attr("class", "show")
	var esteboton = $("#b"+data)
	esteboton.attr("class","show edit")
	esteboton.next().attr("class", "show cancel")
	var estespan = $('#span'+data)
	estespan.hide()
	var yomismo = $(this)
	yomismo.hide()
	yomismo.prev().hide()
	var boton = $("#b"+data)
	boton.show()
	
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
