console.log("cargado")
//localStorage.clear()

/////////////////////////////////////VARIABLES////////////////////////////////////////////

var carritoStorage = localStorage.getItem("carrito");
var carrito = [];
var total = 0;
//busco el total en storage
var totalStorage = localStorage.getItem("total");
console.log(totalStorage)

////////////////////////////////////FUNCIONES/////////////////////////////////////////////

//Chequeo si mi carrito está vacío
if(carritoStorage==null) {
	let carrito=[];
	console.log(carrito)
}else {
	var carrito = JSON.parse(carritoStorage);
	$.each(carrito, function(key,value){
		var precio =
		console.log(value.producto);
		let lis = `<li class="item"><input class="cantsalida" type="number" min="1" id="${key}input" value="${value.producto.cantidad}"/><span>${value.producto.nombre}</span><span class="subtotal" data-precio=${value.producto.precio}>${value.subtotal}</span><i class="far fa-trash-alt eliminar" data-id=${key}></li>`
		$("#items").append(lis)
	})
}
	
if(totalStorage==null){
	let total = 0;
	console.log(total)
}else{
	var total = JSON.parse(totalStorage);
	$('#total').text(total);
}

console.log(total)

//Empiezo a agregar productos
$(".add").on("click", function(){
	if($(this).prev().val()==0) {
		console.log("nope")
		//Agregar etiqueta de aviso de que no seleccionó nada
	}else{
		//Convierto el precio en un número
		var precioString = $(this).prev().prev().text();
		var precio = parseInt(precioString);
		console.log(total);
		//Creo el objeto item
		var item = {	
					stock:10,
					producto: {
						codigo: 0,
						nombre: $(this).prev().attr("name"),
						precio: precio,
						cantidad: parseInt($(this).prev().val())
					}
			}

		//Calculo el stock
		item.stock = item.stock - item.producto.cantidad; //Esto solamente anda si pido más del stock total en una sentada. Hay que hacero todo.
	
		//Si me pasé, hago que aparezca alerta
		if(item.stock<=0){
		return alert("no hay suficiente stock");
	
		//Si no me pasé del stock, mando el item al array
		}else {
			//Calculo el subtotal
			var subtotal = item.producto.cantidad*item.producto.precio;
			total+=subtotal;
			console.log(total)
			let mitotal = JSON.stringify(total);
			localStorage.setItem("total",total);
			//Escribo el total
			var tot = $("#total");
			console.log(tot);
			tot.text(total);
			//Llevo el ítem al array
			var compra = item.producto;
			var subtotalCompra = subtotal;
			var datosCompra = {
			producto:compra,
			subtotal:subtotalCompra
			};
			carrito.push(datosCompra);
		
			//Guardo en localStorage
			let carro = JSON.stringify(carrito);
			localStorage.setItem("carrito",carro);

			//Creo el ítem que se va a ver en el carrito
			var li = '<li class="item"><input class="cantsalida" type="number" min="1" value="'+item.producto.cantidad+'" id="'+(carrito.length-1)+'input"/><span>'+item.producto.nombre+'</span><span class="subtotal" data-precio="'+item.producto.precio+'">'+subtotal+'</span><i class="far fa-trash-alt eliminar" data-id="'+(carrito.length-1)+'"></li>'
			$("#vacio").text("")
			$("#items").append(li)
			$("#comprafinal").css("display","none"); //hace que el cartel de "gracias por su compra" se vaya si vuelvo a agregar ítems
		}
	}
});

//Función para eliminar elementos de a uno al tocar el tachito
$(document).on('click','.eliminar',function(e){
	var indice = $(this).data("id");
	$(this).parent().remove();	
	carrito.splice(indice,1);
	console.log("carrito"+carrito);
	let nuevoCarrito = JSON.stringify(carrito);
	localStorage.setItem("carrito", nuevoCarrito);
	var li = $(".eliminar");
	console.log("largo del carrito"+carrito.length);
	var contenedor = $(this).parent();
	var borroSub= contenedor.find(".subtotal");
	var subValue = parseInt(borroSub.text());
	total-=subValue;
	localStorage.setItem("total", total);
	$("#total").text(total);
	console.log(total);
		
	//Borro y rehago los li para que se reinicien los data-id
	$("#items").children().remove();
	$.each(carrito, function(key,value){
		console.log(value.producto);
		let lis = `<li class="item"><input class="cantsalida" type="number" min="1" id="${key}input" value="${value.producto.cantidad}"/><span>${value.producto.nombre}</span><span class="subtotal" data-precio=${value.producto.precio}>${value.subtotal}</span><i class="far fa-trash-alt eliminar" data-id=${key}></li>`
		$("#items").append(lis)
	})
})

//Elimina todo el carrito al tocar "cancelar compra"
$(document).on('click','#cancel',function(e){
	$("#items").children().remove();	
	carrito=[];
	total = 0;
	localStorage.setItem("total", total);
	$("#total").text("0")
	let nuevoCarrito = JSON.stringify(carrito);
	localStorage.setItem("carrito", nuevoCarrito);
})

//Cambia subtotal al cambiar cantidad
	$(document).on('change', '.cantsalida', function(e){
	var contenedor = $(this).parent();
	var nuevosub= contenedor.find(".subtotal");
	var viejosub = parseInt(nuevosub.text());
	total-=viejosub
	console.log(total);
	var precio = nuevosub.data('precio');
	var cant = parseInt(contenedor.children().first().val());
	var nuevoValor=precio*cant;
	nuevosub.text(nuevoValor);
	total+=nuevoValor
	console.log(total)
	localStorage.setItem("total", total);
	$("#total").text(total)
//Lo paso a localStorage
	for(i=0; i<carrito.length; i++) {
		var data = parseInt($(this).attr("id"));
		//primero busco el elemento correspondiente en el array con un for que compara data-id y posición
		if(data==i) {
			//cuando lo encuentro, cambio el valor correspondiente y creo el JSON de vuelta
			carrito[i].producto.cantidad = cant;
			carrito[i].subtotal = nuevoValor;
			let nuevoCarrito = JSON.stringify(carrito);
			localStorage.setItem("carrito", nuevoCarrito);
		}
	}
})

//Función para finalizar compra
$(document).on('click','#final',function(e){
	//borro todo y reseteo el carrito
	$("#items").children().remove();	
	carrito=[];
	total=0;
	$("#total").text("0")
	localStorage.setItem("total", total);
	let nuevoCarrito = JSON.stringify(carrito);
	localStorage.setItem("carrito", nuevoCarrito);
		
	//aparece cartel de gracias por su compra
	$("#comprafinal").css("display","flex");
})

/////////////////////////////////////NOTAS////////////////////////////////////////////

/*



Apuntes sobre cómo evitar la duplicación de productos y que, al agregar más del mismo, varíe la 
cantidad.

function chequearExistencia(producto){


	let cod = item.producto.codigo; //toma el código del producto al que le di click
	let encontrado = false;
	let i = 0;

	while(encontrado && i<carrito.length){
		

	if(cod=carrito[i].producto.codigo==cod){
		return i
		encontrado = true; // también podría return true directamente.
	}
	i++;
}
return encontrado;
}

*/