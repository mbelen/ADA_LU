console.log("Si podés leer esto, se cargó el JS de Public")

function validarFormulario(){
	var valido = true;
	var campos = $('input');
	for(i=0;i<campos.length;i++){
		console.log(campos[i])
		console.log(campos[i].value)
		if(campos[i].value===""){
			$('#error'+i).text("Debe completar el campo");
			valido = false;
		}else{
			$('#error'+i).text("")
		}
	}

	var phone = $('#tel').val()
	console.log(phone)
	var regexphone = /^0?((11)?(15)?[2-7]\d{7}|[23]\d{2}(15)?[2-7]\d{6}|[23]\d{3}(15)?[2-7]\\d{5})$/;;
	var telValido = regexphone.test(phone)
	console.log(telValido)
	if(phone != ""){
		if(telValido===false) {
			$('#error2').text("teléfono inválido");
			valido = false;
		}else{
			$('#error2').text("")
		}
	}

	var mail = $('#mail').val();
	console.log(mail)
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var mailValido = regex.test(mail)
	console.log(mailValido);
	if(mail != ""){
		if(!mailValido) {
			$('#error3').text("mail inválido");
			valido=false
		}else{
			$("#error3").text("")
		}
	}

	var treinta = $('.treinta');
	for(i=0;i<treinta.length;i++){
		if(treinta[i].value!=""){
			if(treinta[i].value.length>30){
				$('#error'+i).text('El campo debe tener menos de treinta caracteres');
				valido=false;
			}else{
				$('#error'+i).text("")
			}
		}
	}

	if(valido===false){
		return
		
	}else{
		$('form').submit()
	}
}

$(document).ready(function(){
  $("#buscador").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#miTabla tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$('#miBoton').on('click', function(e){
	e.preventDefault()
	validarFormulario()
});
