$("#ejes").hide();
$("#ejeslabel").hide();

$("#tipo").on("change", e=> {
	var opcion = $("#tipo").val();
	if(opcion=="2") {
		$("#ejes").show();
		$("#ejeslabel").show();
	}else{
		$("#ejes").hide();
		$("#ejeslabel").hide();
	}
})

$('#cargar').on('click',e=>{

	e.preventDefault();  // evita el envio del form por GET

	let patente = $('#patente').val(); // recupero patente del form
	let velocidad = parseInt($('#velocidad').val());
	console.log(velocidad)
	console.log(patente);
	var tipo = $("#tipo").val();
	console.log(tipo)
	switch(tipo) {
		case "1": vehiculo = new Auto(patente); // creo un objeto auto. Invoca al constructor de la clase "Auto"
				console.log(vehiculo); // muestro el objeto completo
				break;

		case "2": let ejes = $("#ejes").val();
				  vehiculo = new Camion(ejes,patente,velocidad);
				  console.log(vehiculo);
				  break;
				default: console.log("what");
				break;
	}
	});

/*
POO
Paradigma == forma de estructurar
Es utilizable en != lenguajes de programación (pero no todos)
- Clases
- Atributos y métodos 
- Objetos: instancia de la clase que toma los valores en el momento de correr el código. Es como una 
  variable pero va a ser de la clase que yo defina.

 Pilares:
 - Encapsulamiento
 - Abstracción
 - Herencia
 - Polimorfismo


/////////////////////////////
Auto:
*patente
*marca
*modelo
*cant puertas
*color
+acelerar
+frenar
+doblar

Camión:
*patente
*marca
*modelo
*color
*Ejes 
*tara
+acelerar()
+frenar()
+doblar()
+acoplar()

Hago una clase vehículo que incluya las cosas en común
*patente
*marca
*modelo
*color
+acelerar()
+frenar()
+doblar()

=> 
Auto
*cantidad puertas

Camión:
*cantidad ejes
*tara
+acoplar

(las otras cosas las toman por herencia)

class clasehija extends clasepadre
Un elemento puede tener muchos predecesores (un padre, un "abuelo", ...); pero no dos predecesores del mismo
nivel (o sea, no puede tener dos padres).
Puedo pisar un atributo/método del elemento padre con uno local.
*/