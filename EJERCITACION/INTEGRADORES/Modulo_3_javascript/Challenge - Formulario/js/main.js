//////////////////VARIABLES//////////////////////////
//Para validar
var validar = document.getElementsByClassName("validar");
var enviar = document.getElementById("submitme")
var error = document.getElementsByClassName("error")
var mail = document.getElementById("mail")
var phone = document.getElementById("tel")
var birthday = document.getElementById("birthday")
//Para cargar datos
var nacionalidad = document.getElementById('nacionalidad');
var paises = ["Argentina", "Brasil", "Paraguay", "Uruguay", "Venezuela"];
var doc = ["LC","LE","DNI"]
var tipo = document.getElementById('tipodoc');
var provincia = ["Buenos Aires", "Santa Cruz", "Salta"]
var prov = document.getElementById("prov")
var ciudad = document.getElementById("ciudad")
var ciudades = [
{
	nombre:"Bahía Blanca",
	provincia:"1"
},
{
	nombre:"Tandil",
	provincia:"1"
},
{
	nombre:"Río Gallegos",
	provincia:"2"
},
{
	nombre:"Calafate",
	provincia:"2"
},
{
	nombre:"Salta",
	provincia:"3"
},
{
	nombre:"Marlargüe",
	provincia:"3"
}
]

/////////////////FUNCIONES//////////////////////////

//Validar

function validate() {
	for(i=0; i<validar.length;i++) {
		if(validar[i].value.length==0 || validar[i].value=="0"){
			error[i].innerHTML = "Ingrese un dato válido"
		}
	}
}

//validar mail
function validatemail(mail) {
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	return regex.test(mail.value)
}

function mailok() {
	if(mail.value.length>0) {
		if(!validatemail(mail)){
			mailerror = document.getElementById("mailerror");
			mailerror.innerHTML="Mail inválido";
		}
	}
}

//validar teléfono
function validatephone(phone) {
	var regexphone = /^0?((11)?(15)?[2-7]\d{7}|[23]\d{2}(15)?[2-7]\d{6}|[23]\d{3}(15)?[2-7]\\d{5})$/;
	return regexphone.test(phone.value)
}

function phoneok() {
	if(phone.value.length>0) {
	if(!validatephone(phone)){
			phonerror = document.getElementById("telerror");
			telerror.innerHTML="Teléfono inválido";
}
}
}
//validar género
generror = document.getElementById("generror");
function genero() {
	var fem = document.getElementById('fem')
	var masc = document.getElementById('masc')
	if(fem.checked || masc.checked) {
		generror.innerHTML = ""
	}
	else {	
		generror.innerHTML = "Seleccione una opción";
	}
}

//Validar cumpleaños
function cumple() {
	var stringb = birthday.value;
	console.log(stringb)
	var parse = parseInt(stringb)
	console.log(parse)
	
	if(parse > 2000) {
		ederror = document.getElementById('edaderror')
		ederror.innerHTML = "Debes ser mayor de 18 años para aplicar"
	}
}

//Cargar paises
for(i=0;i<paises.length;i++) {
	var option = document.createElement('option');
	option.value = (i+1);
	option.innerHTML = (paises[i]);
	nacionalidad.appendChild(option);
}

//Cargar tipo de documento
for(i=0;i<doc.length;i++) {
	var option = document.createElement('option');
	option.value = (i+1);
	option.innerHTML = (doc[i]);
	tipo.appendChild(option);
}

//Cargar provincias
for(i=0;i<provincia.length;i++) {
	var option = document.createElement('option');
	option.innerHTML = provincia[i];
	option.value = i+1
	var prov = document.getElementById('prov')
	prov.appendChild(option);
}

//Cargar ciudades 
function cargaciudad() {

	var provalue = prov.value;
	ciudad.innerHTML = "";
	var option0 = document.createElement('option');
			option0.value = 0;
			option0.innerHTML = "Seleccione una opción";
			ciudad.appendChild(option0);

	for(i=0;i<ciudades.length;i++){

		if(ciudades[i].provincia == provalue){
			
			var option = document.createElement('option');
			console.log(ciudades[i].provincia);
			option.value = i+1;
			option.innerHTML = ciudades[i].nombre;
			ciudad.appendChild(option);	
		}
	}
}

function validatodo() {
	validate();
	mailok();
	phoneok();
	genero();
	cumple()
}

////////////////////EVENTOS///////////////////////////
enviar.addEventListener('click',validatodo);
prov.addEventListener('change',cargaciudad);