

var dp =["¡Estoy cargando cosas desde JS!","Hola","OMG"]

/*** PARA CARGAR DATOS PERSONALES EN LA PRIMERA SECCIÓN**
@params (Parámetros) Array dp
void (--> No devuelve nada en JS)
***/

function cargarDatos(dp) {
var nombre = document.createElement('h1');
nombre.textContent = (dp[0]);
	
var nacionalidad = document.createElement('h2');
nacionalidad.textContent = dp[1];

var factura = document.createElement('h3');
factura.textContent = dp[2];

var dpDiv = document.getElementById('uno')
dpDiv.appendChild(nombre);
dpDiv.appendChild(nacionalidad);
dpDiv.appendChild(factura);
}

var carita = ["Carita","img/carita.jpg"];
var otraCarita = ["Otra carita" , "img/caritados.png"];
var ootra = ["Carita","img/carita.jpg"];
var oootra = ["Otra carita" , "img/caritados.png"];
var ooootra = ["Carita","img/carita.jpg"];
var otra = ["Otra carita" , "img/caritados.png"];
var amigos = [carita, otraCarita, ootra, oootra, ooootra, otra]; 

/***FUNCIÓN PARA CARGAR IMÁGENES***
@params lista | array, padre | nodo HTML/
void
***/

function cargarImagenes(lista,padre) {
	
	for(i=0; i<lista.length; i++) { 

	for(j=0; j<lista.length;j++) {
	var img = document.createElement('img');
	img.src = lista[i][1];
	
	
	}
	padre.appendChild(img);
}
}
var dos = document.getElementById('tres');


/***FUNCION PARA CARGAR LA SECCIÓN DE ARRIBA A LA DERECHA**/
var muro = document.getElementById('dos');
function cargarMuro(m) {
if(entradas.length>0) {
	var ul = document.createElement('ul');
	ul.setAttribute('id','posts')

	m.innerHTML = "";

	for(var i=0; i < entradas.length; i++) {
		var li = document.createElement('li');
		var img = document.createElement('img');
		img.src = "img/caritados.png";
		img.classList.add('thumb');
		li.appendChild(img);
		var texto = document.createElement('p');
		texto.textContent = entradas[i];
		li.appendChild(texto);
		ul.appendChild(li);
	}
	m.appendChild(ul);
}
	}

/**INTENTO DE FUNCIÓN PARA CARGAR EL FORMULARIO**/
var cuatro = document.getElementById('cuatro');

function formulario(x) {

var form = document.createElement('input');
form.type = "text";
form.name = "mensaje";
form.id ="texto";
cuatro.appendChild(form);

var button = document.createElement('input');
button.type = "submit";
button.id ="enviar";
cuatro.appendChild(button);
}

 /***ESTO VA A SER INTERSANTE. FUNCIÓN QUE PUBLIQUE EL TEXTO QUE PONGA EN EL INPUT***/
 var entradas = [];

 function publicar(){
 	var entrada = document.getElementById('texto');
 	var texte = entrada.value;

 	entradas.push(texte);
 	console.log(texte);
 	cargarMuro(muro);

 	//Cargar entradas al muro

 }


cargarDatos(dp);
cargarImagenes(amigos,dos);
cargarMuro(muro);
formulario(cuatro);

var btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click',publicar);