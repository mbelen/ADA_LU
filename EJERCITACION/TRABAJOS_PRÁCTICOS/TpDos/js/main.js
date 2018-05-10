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
var img ='<figure class="slotficha"><img id="'+fichas[i].nombre+'" class="reverso" src="'+fichas[i].img+'" data-valor="'+fichas[i].valor+'"/></figure>'
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
  gameplay();
}) //Por alguna razón, cuando la uso no se aplica más la función gameplay. VER.

//Función Gameplay

function gameplay(){
  var par = [];
  var controlNombre = [];
  var turno = 24;
  var puntos = 0

  $(".reverso").on('click', function vuelta() {
  console.log("listen")
  console.log(par)
  //da vuelta la ficha
  $(this).addClass("anverso");
  $(this).removeClass("reverso");

  
  //manda el valor al array "par" y el nombre al array de control
  par.push($(this).data("valor"));
  controlNombre.push($(this).attr('id'));
  console.log(par)

    //Dispara la comparación cuando hay dos elementos en el array
    if(par.length===2) {
    
      //Controlo el nombre de ficha para asegurarme de no haber clickeado dos veces la misma
      if(controlNombre[0]===controlNombre[1]){
      
      //si efectivamente di click dos veces en la misma, quito una de cada array, así puedo elegir otra
      par.splice(0,1);
      controlNombre.splice(0,1)
      console.log(par)
      
      //entro a la comparación
      }else{
        //trabo las otras fichas con una clase para que no pueda dar vuelta más de dos a la vez
        $(".reverso").addClass("lock");
        $(".lock").removeClass("reverso")
        
        if(par[0]===par[1]) {
        console.log("yay");
          //Si gané, les cambio la clase para no poder tocarlas más y destrabo las otras fichas
          function win(){
          $(".anverso").addClass("win"); //creo que ahora sobra
          $(".win").removeClass("anverso"); //creo que ahora sobra
          $("#"+controlNombre[0]).off('click');
          $("#"+controlNombre[1]).off('click');
          $(".lock").addClass("reverso");
          $(".reverso").removeClass("lock");
          par=[]
          controlNombre=[];
          puntos++
          console.log(puntos)
          }
        setTimeout(win, 1000)
        
        }else{
        console.log("nay");
        
          //si perdí, doy vuelta las fichas seleccionadas y destrabo las demás
          function lose() {
          $(".anverso").addClass("reverso");
          $(".reverso").removeClass("anverso");
          $(".lock").addClass("reverso");
          $(".reverso").removeClass("lock");
          par=[];
          controlNombre=[];
          turno--
          console.log(turno)
          }
        setTimeout(lose, 1000) 
        }
      }
    }
  })
}


/////////////////////////////LLAMADAS A FUNCIONES////////////////////////////////
mezclar();
repartir();
$( document ).ready(gameplay)


/*
- Averiguar por qué el botón reiniciar me rompe la función Gameplay
- Averiguar por qué me toma el onclick de .anverso cuando ya cambié la clase a lock
*/