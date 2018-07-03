console.log("cargado")
var favoritos = [];
//Recibe el onclick del ícono de corazón y envía al servidor el nombre del animal clickeado
function enviarFavorito(){
$('.fa-heart').on('click', function(){
  	var nombre = $(this).data('id');
  	console.log(nombre)
  	$(this).toggleClass('favorito');

  $.ajax({
            url: "/pancho/favoritos",
            type: "post",
            data:{info: JSON.stringify({'favorito':nombre})},
          
            success: function (response) {
               if(response){
                   console.log(response);
                     
              }else{
                    alert("error");
              }       
            },
            error: function(response) {
                    console.log("maldición");
            }
          }); 	
  }) 
}
enviarFavorito()
                            

console.log(favoritos);