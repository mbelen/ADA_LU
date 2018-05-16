console.log("cargado");

$("#envio").on('click', function(){
	event.preventDefault();
let precio = parseInt($("#precio").val());
let descuento = parseInt($("#descuento option:selected").text());
let cuotas = parseInt($("#cuotas option:selected").text());
let peso = parseInt($("#peso").val());
let distancia = parseInt($("#distancia").val());
var compra = new Compra(precio,descuento,cuotas,peso,distancia);
console.log(compra)

var compraDescontada = compra.getDescuento()
console.log(compraDescontada);

var compraFinanciada = compra.getFinanciacion();
console.log(compraFinanciada);

var total = compra.getEnvio();

var printDescontado = compraDescontada.toFixed(2);
var printFinanciado = compraFinanciada.toFixed(2);
var printTotal = total.toFixed(2)
$("#subtotal").text(precio);
$("#descontado").text(printDescontado);
$("#cuotado").text(printFinanciado);
$("#total").text(printTotal);
})