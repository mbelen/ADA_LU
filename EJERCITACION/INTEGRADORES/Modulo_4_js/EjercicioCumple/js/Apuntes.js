//tarea: traer al arreglo "cumples" con lo que ya estaba en él cuando recargo la web
 
/* despues del console log de cumples va algo parecido a:
jsonCumple = {
  "cumple":cumples,
  "total":cumples.length,
} 

console.log(jsonCumple);
let data = JSON.stringify(jsonCumple);
localstorage("cumples", data);

Para guardar los datos, la cosa es algo así, pero revisar porque algún error tiene

var cumples;

var datosGuardados = JSON.parse(localStorage.getItem("cumples"));
console.log(datosGuardados)

if(datosGuardados == null) {
cumples = [];
console.log(cumples);

}

else {
cumples = JSON.parse(datosGuardados).cumples;
}

let datosGuardados = JSON.parse(localStorage.getItem("cumples"));
console.log(datosGuardados)

if(!datosGuardados) {
cumples = [];
console.log(cumples);

}

else {
cumples = datosGuardados.cumples;
}

Al hacer la home, debo crear un nuevo JS
Lo primero que hago en él es traerme los cumples guardados

var cumplesStorage = localStorage.getItem("cumples");
var cumples = JSON.parse(cumplesStorage).cumples;

Luego, para cargar por pantalla los cumples:

$each(cumples, function(index,elem){
let li = `<li><p><span>${elem.cumple}</span></p></li>` 
})

('#iddeunulquecreéenelhtml').append(li)
}

Creo una función para ver el cumple del día
function cumpledelDia() {
let cumpleHoyImg = cumples[0].imagen;
let cumpleHoyName = cumples[0].nombre;

let h1 = `<h1>${cumpleHoyName}</h1>`;
let img = `'<img src=img/${cumpleHoyImg}.png>'´*

$('#iddedivquecreénmihtmlparacargarelh1ylaimagen').append(h1);
$('#iddedivquecreénmihtmlparacargarelh1ylaimagen').append(img);

*acá tengo varias opciones:
renombrar mis imágenes para que el nombre coincida con el data-id (habría
que recargarlas en el item) y armar el src desde ahí.
Quedarme directamente con el source de la imagen en el formulario
(acá, si mi ruta hasta la imagen es extensa, puedo definirla como variable
para poder reutilizarla).


}
`Cuando defino una cadena entre estos cositos, puedo interpolar, o sea meterle
variables, funciones,etc (ponele, ver apunte)`

///////////////////////////Math random!!!!!

Math.floor((Math.random()*10) + 1);
Para randomizar nuestro array de cumples

var indice = Math.floor(Math.random() * cumples.length);

let cumpleHoyImg = cumples[indice].imagen;
let cumpleHoyName = cumples[indice].nombre;

Math.round() --->¡Redondea! (te tira un entero. Si decimal > .5 tira el de arriba)
Math.floor() ---> Redondea para abajo.
