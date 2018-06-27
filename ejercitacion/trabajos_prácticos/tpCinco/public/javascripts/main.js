console.log("cargado")
var favoritos = [];

$.ajax({
          url: "/mandar",
          type: "get",
                  
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

$('.fa-heart').on('click', function(){
	var nombre = $(this).data('id');
	console.log(nombre)
	$(this).toggleClass('favorito');
	var repetido = jQuery.inArray(nombre, favoritos);
	if (repetido >= 0) {
        	favoritos.splice(repetido, 1);
		} 
		else 
		{
        	favoritos.push(nombre);
		}
	
	console.log(favoritos)
$.ajax({
          url: "/favoritos",
          type: "post",
          data:{info: JSON.stringify({'favoritos':favoritos})},
        
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
}
) 

                            

console.log(favoritos);