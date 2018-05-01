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
 $("#ingreso").on("click", function () {
  var nombre = $("#nombre").val();
    if(nombre != "") {
      $("#nombre").hide();
      $("#nombre").prev().hide();
      $(this).hide();
      var jugador = "<p id='player'>Jugador/x actual: "+nombre+"<span id='editar' class='ion-edit icono'></span></p>"    
      $("form").append(jugador);
      $("#error").text("")
    }else{
      $("#error").text("Ingresá tu nombre");
  }
})

//Función para editar o cambiar el nombre
$(document).on("click", "#editar", function(e) {
  $("#nombre").show();
  $("#nombre").prev().show();
  $("#ingreso").show();
  $("#player").remove();
  $(this).remove();  
})


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
var img ='<figure class="slotficha"><img class="reverso"src="'+fichas[i]["img"]+'"/></figure>'
tablero.append(img);
console.log("repartido")
}
}


//Función que rehace mezcla y reparto al clickear "reiniciar" (habrá probablemente que agregarle que reinicie el contador)
$('#reinicio').on('click', function() {
  console.log("what")
  $('#tablero').children().remove();
  mezclar();
  repartir();
})

//Función Gameplay

/////////////////////////////LLAMADAS A FUNCIONES////////////////////////////////
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

También: Embellecer la función de nombre. Agregar botón para cambiar que vuelva atrás. 
Ponerle estilo
*/