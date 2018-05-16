console.log("cargado");
var local = localStorage.getItem("compra");
console.log(local)

$("#comprar").on("click",function() {
	event.preventDefault();
	if($("#cantidad option:selected").val()=="0"||$("#producto option:selected").val()=="0"||$("#precio option:selected").val()==0){
		console.log("falta algo")
	}
	else{
		var cantidad = $("#cantidad option:selected").text();
		var producto = $("#producto option:selected").text();
		var precio = $("#precio option:selected").text();
		datosCompra = {
			"cantidad":cantidad,
			"producto":producto,
			"precio":precio
		}
		console.log(datosCompra);
		localStorage.setItem("compra", JSON.stringify(datosCompra));
		let compraFinal = JSON.parse(localStorage.getItem("compra"));
		console.log(compraFinal);
	}
})
