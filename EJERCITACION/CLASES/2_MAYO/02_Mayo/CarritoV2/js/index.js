console.log("cargado")
//localStorage.clear()
/////////////////////////////////////VARIABLES////////////////////////////////////////////

var carritoStorage = localStorage.getItem("carrito");
console.log(carritoStorage);
var carrito = [];

////////////////////////////////////FUNCIONES/////////////////////////////////////////////


//Chequeo si mi carrito está vacío
if(carritoStorage==null) {
		let carrito=[];
		console.log(carrito)
}else {
		var carrito = JSON.parse(carritoStorage);
		console.log(carrito)
		
		$.each(carrito, function(key,value){
			var precio =
			console.log(value.producto);
			let lis = `<li class="item"><input class="cantsalida" type="number" min="1" id="${key}input" value="${value.producto.cantidad}"/><span>${value.producto.nombre}</span><span class="subtotal" data-precio=${value.producto.precio}>${value.subtotal}</span><i class="far fa-trash-alt eliminar" data-id=${key}></li>`
			
			$("#items").append(lis)
		})
	
}
	console.log(carrito)

//Empiezo a agregar productos
$(".add").on("click", function(){
	//Convierto el precio en un número
	if($(this).prev().val()==0) {
		console.log("nope")
	}else{
		var precioString = $(this).prev().prev().text();
		var precio = parseInt(precioString);
	//Creo el objeto item
	var item = {	stock:10,
					producto: {
						codigo: 0,
						nombre: $(this).prev().attr("name"),
						precio: precio,
						cantidad: parseInt($(this).prev().val())
					}

	}

	
	//Calculo el stock
	item.stock = item.stock - item.producto.cantidad; //Esto solamente anda si pido más del stock total en una sentada. Hay que hacero todo.
	if(item.stock<=0){
		console.log("no hay stock");
		return alert("no hay suficiente stock");
		return false
	}

	//Si no me pasé del stock, mando el item al array
	else {
		//Calculo el subtotal
		var subtotal = item.producto.cantidad*item.producto.precio;
		console.log(subtotal);

		//Llevo el ítem al array
		var compra = item.producto;
		var subtotalCompra = subtotal;
		var datosCompra = {
			producto:compra,
			subtotal:subtotalCompra
		};
		carrito.push(datosCompra);
		console.log(carrito);
		
		//Guardo en localStorage
		let carro = JSON.stringify(carrito);
		console.log(carro);
		localStorage.setItem("carrito",carro);
		console.log(carrito)
		//Creo el ítem que se va a ver en el carrito
		var li = '<li class="item"><input class="cantsalida" type="number" min="1" value="'+item.producto.cantidad+'" id="'+(carrito.length-1)+'input"/><span>'+item.producto.nombre+'</span><span class="subtotal" data-precio="'+item.producto.precio+'">'+subtotal+'</span><i class="far fa-trash-alt eliminar" data id="'+(carrito.length-1)+'"></li>'
		$("#vacio").text("")
		$("#items").append(li)

	}

	
}
});

//Elimina elementos de a uno

$(document).on('click','.eliminar',function(e){
		var indice = $(this).data("id");
		$(this).parent().remove();	
		carrito.splice(indice,1);
		console.log(carrito);
		let nuevoCarrito = JSON.stringify(carrito);
		console.log(nuevoCarrito);
	})

//Elimina todo el carrito

$(document).on('click','#cancel',function(e){
		console.log($("#items").children())
		$("#items").children().remove();	
		carrito=[]
		console.log(carrito);
		let nuevoCarrito = JSON.stringify(carrito);
		console.log(nuevoCarrito);
		localStorage.setItem("carrito", nuevoCarrito);
	})

//Cambia subtotal al cambiar cantidad
$(document).on('change', '.cantsalida', function(e){
	console.log("cambioooo");
	var contenedor = $(this).parent();
	var nuevosub= contenedor.find(".subtotal");
	var precio = nuevosub.data('precio');
	var cant = parseInt(contenedor.children().first().val());
	var nuevoValor=precio*cant;
	console.log(cant)
	console.log(nuevosub); 
	nuevosub.text(nuevoValor);
	
	//Lo paso a localStorage
	for(i=0; i<carrito.length; i++) {
		var data = parseInt($(this).attr("id"));
		console.log(data)
		console.log(carrito[i])
		if(data==i) {
			console.log(carrito[i])
			carrito[i].producto.cantidad = cant;
			carrito[i].subtotal = nuevoValor;
			console.log(carrito[i]);
			console.log(carrito);
			let nuevoCarrito = JSON.stringify(carrito);
			console.log(nuevoCarrito);
			localStorage.setItem("carrito", nuevoCarrito);
		}
	}
	console.log(carrito);
	console.log($(this).parent())
})

/////////////////////////////////////LLAMADAS////////////////////////////////////////////

/*

falta 
- Posibilidad de modificar dinámicamente la cantidad. Esto significa:
  cambiarla en el li
  recalcular subtotal
  mover cantidad y subtotal nuevos a localStorage para que los traiga bien a partir de ahí
  (eso último será un tema)
Preguntas:
-Traté de meter lo de traerme el carrito en una función y, cuando no hay carrito creado, no se me crea
¿Cómo puedo pasar variables de una función al scope global?
- ¿Cómo encaro el stock?

/*
- Los inputs llevan cantidad
- Hay que guardar la data en localstorage donde se guarde mi carrito y generar una página de 
checkout
- Mi carrito debe:
  -agregar producto -> ¿qué es mi producto?¿Es un objeto?¿Qué atributos tiene?
  (producto=objeto con descripción, precio y cantidad)
  (o código:número, descripción:string, precio:número '¿flotante?', cantidad, img)
  -vaciar
  -hacer la compra
  -eliminar producto
  -modificar la cantidad
  -Calcular subtotales y total
La compra arranca o con un carro vacío o con lo que tenía guardado en el carro, así
que primero debe haber una función que confirme si ya hay cosas en el carrito.
- Stock: es un atributo del producto. Hay un máximo que se puede comprar y en la
medida en que compramos va bajando. 
Puede ser así:
item{
	cantidad:stock (int)
	producto:{código,descripción,precio,cantidad}
}
El stock debería validarse al cerrar la compra?
Podemos agregar un tiempo de sesión
  
//Creo el cartelito de que el carrito está vacío si no hay nada
function vacio() {
if(carrito.length==0) {
	$("#vacio").text("no hay elementos en tu carrito");
	console.log(carrito)
}else{
	$("#vacio").text("");
}

}


  */

/*////////////////////////////////////////////////////////////3/5
Versión vista en clase


// Creo un objeto producto vacio para guardar la información
var producto = {};


$('.add').on('click',function(e){

	let hermanos = $(this).siblings(); //me traigo un arreglo que va a tener todo el div producto

	// Recupero la información del HTML

	producto.url = hermanos[0].src; //imagen
	producto.descripcion = hermanos[1].innerText; 
	producto.precio = hermanos[2].innerText;
	
	// Creo un objeto item, para agregar luego al carrito

	var item ={
		cantidad : hermanos[3].value,
		producto : producto
	}
		
	console.log(item);
	carrito.push(item);

	//Creo el localStorage
	let jsonCarrito = {'productos':carrito};
	localStorage.setItem('carrito', JSON.stringify(jsonCarrito))
});

/*Para controlar stock:
Cuando agrego: si cantidad>stock sale un alert.
Puedo cargar el stock en el html o directamente por JS.
Si lo cargo en html:
Lo agrego en mi objeto producto
producto.stock = hermanos[3].innerText; //estoy asumiendo que lo incluí en el div como un ítem de igual jerarquía que el botón add.
if cantidad > stock
no creo el item.

¿Cómo actualizo el stock?

*/
