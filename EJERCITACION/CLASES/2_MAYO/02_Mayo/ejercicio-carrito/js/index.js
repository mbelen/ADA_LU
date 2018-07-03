console.log("cargado")

/////////////////////////////////////VARIABLES////////////////////////////////////////////

var carritoStorage = localStorage.getItem("carrito");
console.log(carritoStorage);
var carrito = [];

////////////////////////////////////FUNCIONES/////////////////////////////////////////////


//Chequeo si mi carrito está vacío
function crearCarrito() {
	if(carritoStorage==null) {
		let carrito=[];
		console.log(carrito)
	}else {
		var carrito = JSON.parse(carritoStorage);
	}
	return carrito
}
	crearCarrito()

$(".add").on("click", function(){
	//Convierto el precio en un número
	var precioString = $(this).prev().prev().text();
	var precio = parseInt(precioString);

	//Creo el objeto item
	var item = {	stock:10,
					producto: {
						codigo: 0,
						nombre: $(this).prev().attr("name"),
						precio: precio,
						cantidad: parseInt($(this).prev().val()),
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
		carrito.push(item);
		console.log(carrito);
		//Calculo el subtotal
		var subtotal = item.producto.cantidad*item.producto.precio;
		console.log(subtotal)
		console.log(item.producto.nombre);
		var li = '<li class="item"><span>Cant: '+item.producto.cantidad+'</span><span> Producto: '+item.producto.nombre+'</span><span> Subtotal: $'+subtotal+'<i class="far fa-trash-alt eliminar"></li>'
		$("#vacio").text("")
		$("#items").append(li)

	}

});

function vacio() {
if(carrito.length==0) {
	$("#vacio").text("no hay elementos en su carrito");

}

$("#cerrar").on("click", function(){
	console.log(carrito)
})}
/////////////////////////////////////LLAMADAS////////////////////////////////////////////
vacio()



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
  */
