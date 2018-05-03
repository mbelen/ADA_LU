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
			let lis = `<li class="item"><span>${value.productos.cantidad}</span><span>${value.productos.nombre}</span><span>Subtotal: $ ${value.subtotal}</span><i class="far fa-trash-alt eliminar" data-id=${key}></li>`
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
	item.stock = item.stock - item.producto.cantidad;
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
			productos:compra,
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
		var li = '<li class="item"><span>'+item.producto.cantidad+'</span><span>'+item.producto.nombre+'</span><span> Subtotal: $'+subtotal+'</span><i class="far fa-trash-alt eliminar" data id="'+(carrito.length-1)+'"></li>'
		$("#vacio").text("")
		$("#items").append(li)

	}

	
}
});

$(document).on('click','.eliminar',function(e){
		var indice = $(this).data("id");
		$(this).parent().remove();	
		carrito.splice(indice,1);
		console.log(carrito);
		let nuevoCarrito = JSON.stringify(carrito);
		console.log(nuevoCarrito);
		localStorage.setItem("carrito", nuevoCarrito);
	})

/////////////////////////////////////LLAMADAS////////////////////////////////////////////

/*
Preguntas:
¿Por qué no se me crea el array carrito si está vacío?
¿Cómo creo data-id continuados entre lo que me traigo y lo nuevo que voy creando?


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

