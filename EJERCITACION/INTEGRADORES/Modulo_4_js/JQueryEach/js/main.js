console.log("cargado");

////////////////////////////////////VARIABLE GLOBAL///////////////////////////////////////

var personajes = [
{
nombre:"Kitty", 
img:$("#kitty"),
valor:"1"
},

{
nombre:"Melody", 
img:$("#melody"),
valor:"2"
}, 
{
nombre:"Keroppi", 
img:$("#keroppi"),
valor:"3"
}, 
{nombre:"Tuxedo Sam", 
img:$("#tuxedoSam"),
valor:"4"
}
]

//////////////////////////////////FUNCIONES////////////////////////////////////////////

//Función 1: genera dinámicamente las opciones del select
function selector() {
$.each(personajes,function(key,value){
	var option = "<option value='"+value.valor+"'>"+value.nombre+"</option>"
	$("#selector").append(option);
});
}

//Función 2: Visibiliza la imagen correspondiente a la opción seleccionada
$("#selector").on("change", function() {
	$.each(personajes,function(key,value){
		console.log($("#selector").val());
		console.log(value.valor)
		if($("#selector").val()==value.valor){
			console.log(value);
			var img = value.img
			img.css("display", "inline");
		}else {
			var img = value.img
			img.css("display", "none");
			console.log("no estaría ingresando")
		}
	})
})

selector();


