console.log("cargado");
var compra = new Compra(5,10);
var descuento = compra.getDescuento();

compra.cuotas = 6
console.log(compra)
console.log(descuento)

var financia = compra.getFinanciacion();
console.log(financia)

compra.pesaje = 30;
compra.distancia = 25;