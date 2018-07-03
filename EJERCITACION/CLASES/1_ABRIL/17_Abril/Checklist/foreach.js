///VARIABLES///
var input = document.getElementById("tarea")
var boton = document.getElementById("boton")
var lista = document.getElementById("lista")
var limpiar = document.getElementById("limpiar")
console.log(tarea + boton + lista)
var inputs=document.getElementsByTagName("input")
console.log(inputs)
//FUNCIÓN//

function cargalista() {
	var crearli = document.createElement("li")
	crearli.innerHTML = input.value
	lista.appendChild(crearli)
	input.value=""
}

function cleanup() {
	console.log(inputs);
	var inputsArray = Array.from(inputs);
	inputsArray.forEach(function(e)
	{console.log(e)
		e.value = ""
	}
		)
	
}

boton.addEventListener("click",cargalista)
limpiar.addEventListener("click",cleanup)