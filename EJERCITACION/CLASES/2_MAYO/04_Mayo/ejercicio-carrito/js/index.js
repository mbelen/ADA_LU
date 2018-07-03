// Creo un objeto producto vacio para guardar la información
var producto = {};

var carritoStorage = localStorage.getItem("carrito");

if(carritoStorage == null){

	var carrito = [];
}else{
	carrito = JSON.parse(carritoStorage).productos;
}

$('.add').on('click',function(e){

	let hermanos = $(this).siblings();

	// Recupero la información del HTML

 	producto.url = hermanos[0].src;
	producto.descripcion = hermanos[1].innerText;
	producto.precio = hermanos[2].innerText;
	producto.stock = hermanos[3].innerText;

	if(parseInt(producto.stock) >= parseInt(hermanos[4].value)){

		// Creo un objeto item, para agregar luego al carrito

		var item ={
			cantidad : parseInt(hermanos[4].value),
			producto : producto
		}
			
		console.log(item);

		carrito.push(item);

		let jsonCarrito = {'productos': carrito};
		localStorage.setItem('carrito',JSON.stringify(jsonCarrito));
	
	}else{
		alert("No se agregó el producto, no hay stock suficiente.");
	}	

});

function chequearExistencia(producto){


	let cod = item.producto.codigo; //toma el código del producto al que le di click
	let encontrado = false;
	let i = 0;

	while(!encontrado && i<carrito.length){
		
	if(cod=carrito[i].producto.codigo==cod){
		return i
		//encontrado = true; también podría return true directamente. 
	}
	i++;
}
return encontrado;
}

/*La función me devuelve O una posición O un booleano falso. O sea, si lo encuentra, me dice la posición,
si no lo encuentra, me dice que es falso (que no hay elementos repetidos)*/


/*En agregar creo una 
let pos = chequearexistencia(producto);
if(!pos) {
	carrito.push(item);
}else{
	carrito.pos.cantidad -> ++
}
