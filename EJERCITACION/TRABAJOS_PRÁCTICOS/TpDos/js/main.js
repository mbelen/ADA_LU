console.log("cargado");
/////////////////////////////////VARIABLES//////////////////////////////////////////
var fichas = [{ nombre:0, 
                valor:0, 
                img:'img/fichas/ficha1.jpg'
              },
              {
                nombre:1, 
                valor:0, 
                img:'img/fichas/ficha1.jpg'
              },
              {
                nombre:2, 
                valor:1, 
                img:'img/fichas/ficha2.jpg'
              },
              {
                nombre:3, 
                valor:1, 
                img:'img/fichas/ficha2.jpg'
              },
              { 
                nombre:4, 
                valor:2, 
                img:'img/fichas/ficha3.jpg'
              },
              { 
                nombre:5, 
                valor:2, 
                img:'img/fichas/ficha3.jpg'
              },
              {
                nombre:6, 
                valor:3, 
                img:'img/fichas/ficha4.jpg'
              },
              {
                nombre:7, 
                valor:3, 
                img:'img/fichas/ficha4.jpg'
              },
              {
                nombre:8, 
                valor:4, 
                img:'img/fichas/ficha5.jpg'
              },
              { 
                nombre:9, 
                valor:4, 
                img:'img/fichas/ficha5.jpg'
              },
              { 
                nombre:10, 
                valor:5, 
                img:'img/fichas/ficha6.jpg'
              },
              {
                nombre:11, 
                valor:5, 
                img:'img/fichas/ficha6.jpg'
              },
              ];

/////////////////////////////////FUNCIONES////////////////////////////////////////////

//Función para que el jugador ponga su nombre
function nombre() {
  var nombre=$("#nombre").val();
  
}

//Función que mezcla las fichas 
function mezclar(){
for(i=0; i<fichas.length; i++){
  var random= Math.floor(Math.random()*fichas.length);
  var slot=fichas[i] //guarda la ficha de la posición[i] en un slot que usaré para recuperar el dato
  fichas[i]=fichas[random]//reemplaza la ficha en la posición [i](ahora guardada en el slot) por la que está en la posición random
  fichas[random]=slot//reemplaza la ficha en posición random por la ficha en posición i (en otras palabras, completa la acción de cambiar fichas[i] y fichas[random] de) 
}
console.log(fichas)
}


//Función que reparte las fichas creando dinámicamente los figs e img en el tablero

function repartir() {
var tablero = $('#tablero');
for(i=0;i<fichas.length;i++){
var img ='<figure class="slotficha"><img src="'+fichas[i]["img"]+'"/></figure>'
tablero.append(img);
}
}

nombre()
mezclar();
repartir();


/*Apuntes varios
Próximo objetivo: empezar la función propia del juego. En un primer momento,
lograr que me deje clickear dos y solo dos elementos, tomar sus valores y, pasado un
tiempo, volverlos a dar vuelta:

- Las cartas dadas vuelta se compararán, en principio, con un if que compare 
el atributo "valor"
- Va a haber que poner un set timeout que revierta las cartas incorrectas
- Las cartas se darán vuelta agregándoles-quitándoles display:none u opacity:0
- Para que no pueda dar vuelta más de dos cartas a la vez, capaz haya que hacer un
contador que no deje ejecutar el onclick si está en 2.

También: hacer la función que permita introducir el nombre.
*/