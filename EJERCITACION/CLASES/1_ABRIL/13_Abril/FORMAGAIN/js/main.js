var paises = ["Argentina", "Brasil", "Paraguay", "Uruguay", "Venezuela"];
var provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes",
"Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén",
"Río Negro", "Salta", "San Juan", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego",
"Tucumán"];

var nacionalidad = document.getElementById('nacionalidad');
var validar = document.getElementsByClassName('validar');
console.log(validar);
var obligatorio = document.getElementsByClassName('obligatorio');
var btnEnviar = document.getElementById('submitme');
//Validator

function validator() {
	for(i=0; i<validar.length; i++) {
		if(validar[i].value.length==0) {
			console.log("nopes");

			obligatorio[i].innerHTML = "Campo obligatorio"
		}
	}
}



//coso que carga las nacionalidades
for(i=0;i<paises.length;i++) {
	var option = document.createElement('option');
	option.value = (i+1);
	option.innerHTML = (paises[i]);
	nacionalidad.appendChild(option);
}

//coso que carga las provincias
var provincia = document.getElementById("provincia")

function provinciar(provincia) {
	for(i=0;i<provincias.length;i++) {
	var option = document.createElement('option');
	option.value = (provincias[i]);
	option.text = (provincias[i]);
	provincia.appendChild(option);
};
}
provinciar(provincia)
btnEnviar.addEventListener('click',validator);
/****
ORDEN DE LAS COSAS
1) VARIABLES GLOBALES
2) DECLARACIÓN DE FUNCIONES (TODAS)
   SI TENGO UNA FUNCIÓN QUE VA A LLAMAR OTRAS, LAS OTRAS VAN PRIMERO 
   Y LA QUE ENGLOBA VA AL FINAL
 3) ELEMENTOS DEL DOM (TAMBIÉN LOS PUEDO DECLARAR ARRIBA COMO
 VARIABLES GLOBALES)
Y LOS LISTENERS AL FINAL DE TODO
****/