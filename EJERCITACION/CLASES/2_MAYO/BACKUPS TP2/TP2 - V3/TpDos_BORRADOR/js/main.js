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

  var par = [];
  var controlNombre = [];
  var turno = 24;
  var puntos = 0;

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
      var slot=fichas[i] 
      fichas[i]=fichas[random]
      fichas[random]=slot 
    }
}

//Función que reparte las fichas creando dinámicamente los figs e img en el tablero

function repartir() {
var tablero = $('#tablero');
for(i=0;i<fichas.length;i++){
var img ='<figure class="slotficha"><img id="'+fichas[i].nombre+'" class="reverso" src="'+fichas[i].img+'" data-valor="'+fichas[i].valor+'" draggable="false"/></figure>'
tablero.append(img);
}
console.log("repartido")
}

//Función que resetea valores y rehace mezcla/reparto al clickear "reiniciar" 

$('#reinicio').on('click', function() {
  turno = 24;
  puntos = 0;
  par = [];
  controlNombre = [];
  $("#contador").text(turno)
  $('#tablero').children().remove();
  mezclar();
  repartir();

}) 

//Función Gameplay

$(document).on("click", ".reverso", function gameplay(e) {
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
    
      //Primero controlo no haber clickeado dos veces la misma ficha y, de ser así, remuevo un valor.
      if(controlNombre[0]===controlNombre[1]){
      
      par.splice(0,1);
      controlNombre.splice(0,1)
      
      //Si está todo ok, entro a la comparación
      }else{
        comparar()
      }
    }
})


//Función que compara las fichas y llama las funciones win/lose según corresponda        
function comparar() {

    $(".reverso").addClass("lock");
    $(".lock").removeClass("reverso")
        
    if(par[0]===par[1]) {
      console.log("yay");
      setTimeout(win, 1000)
        
    }else{
      console.log("nay");
      setTimeout(lose, 1000)
    } 
}


//Función que se activa si acierto el par
function win(){
  $(".anverso").addClass("win");
  $(".win").removeClass("anverso"); 
  $("#"+controlNombre[0]).off('click');
  $("#"+controlNombre[1]).off('click');
  $(".lock").addClass("reverso");
  $(".reverso").removeClass("lock");
  par=[]
  controlNombre=[];
  puntos++
  console.log(puntos);
  if(puntos===6) {
    alert("ganamos");
    $("#tablero").children().remove();
    var win = `<div id="ganamos"><figure><img src="img/ganador.gif" alt="gato celebratorio"/></figure><h2>¡Felicidades! ¡Has ganado!</h2><h5>¡¡¡¡Presiona "reiniciar" para jugar de nuevo!!!!</h5></div>`
    $("#tablero").append(win)  
  }
}

//Función que se activa si NO acierto el par
function lose() {
  $(".anverso").addClass("reverso");
  $(".reverso").removeClass("anverso");
  $(".lock").addClass("reverso");
  $(".reverso").removeClass("lock");
  par=[];
  controlNombre=[];
  turno--
  $("#contador").text(turno)
  console.log(turno)
  if(turno===0) {
    alert("perdimos")
    $("#tablero").children().remove();
  }
}

/////////////////////////////LLAMADAS A FUNCIONES////////////////////////////////
mezclar();
repartir();
