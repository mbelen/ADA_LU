console.log("cargado");

var jsonCumple;
var cumples;

let datosGuardados = localStorage.getItem("cumples");
console.log(datosGuardados)

if(datosGuardados == null) {
   cumples = [];
  console.log(cumples);

}else {
  cumples = JSON.parse(datosGuardados).cumples;
  console.log(JSON.parse(datosGuardados).cumples);
}

 $(".opcion").click(function tomar(){ //Completa el input de imagen 
  	console.log("imagenclickeada")
  	var gato = $(this).data('name')
  	$('#imagen').val(gato)
 })


$("#boton").click(function validar() { //Chequea que todos los inputs estén completos
 
  console.log("listen")

  var validar = $('.validar');
  var error = $('.error')
  console.log(validar)
  for(i=0;i<validar.length;i++) {
  	if(validar[i].value.length==0) {
  		error[i].innerHTML = "Ingrese un dato válido"
  		event.preventDefault()
   	}
   	else {
   		error[i].innerHTML = "";
      var validado = true;
   	}	
  }

  if(validado) {
    let datos = {  //Crea un objeto con los datos puestos en los inputs
        nombre:$('#nombre').val(),
        cumple:$('#cumple').val(),
        gato:$('#imagen').val()
      }
      console.log(cumples);
      cumples.push(datos); //mando los datos al array cumples que creé arriba
      

      jsonCumple = {
        "cumples": cumples,
        "total": cumples.length,
      }
      console.log(jsonCumple);

      let data = JSON.stringify(jsonCumple);
      console.log(data);
      localStorage.setItem("cumples", data);
      //Las siguientes líneas limpian los inputs
      $('#nombre').val("");
      $('#cumple').val("");
      $('#imagen').val("");
  }
});


//tarea: traer al arreglo "cumples" con lo que ya estaba en él cuando recargo la web
 
/*despues del console log de cumples va algo parecido a:
jsonCumple = {
  "cumple":cumples,
  "total":cumples.length,
} 

console.log(jsonCumple);
let data = JSON.stringify(jsonCumple);
localstorage("cumples", data);
*/