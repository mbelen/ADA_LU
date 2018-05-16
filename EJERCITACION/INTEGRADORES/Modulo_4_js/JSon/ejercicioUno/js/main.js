console.log("cargado");

////////////////////////////////////VARIABLE GLOBAL///////////////////////////////////////

let nombre = "Pepe";
let apellido = "Fernández";
let materias = ["matemática", "física", "química", "historia"];

alumno = {
	"nombre": nombre,
	"apellido": apellido,
	"materias": materias
};

localStorage.setItem("alumno", JSON.stringify(alumno));
let dataAlumno = JSON.parse(localStorage.getItem("alumno"));
console.log(dataAlumno);

