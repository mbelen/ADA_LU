//Función que pone a andar el slider

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

//Validación del formulario de login
$('#ingresar').on('click', function(e){
    e.preventDefault();
    var usuario = $('#usuario').val();
    var contraseña = $('#contraseña').val();
    if(usuario==="" || contraseña===""){
        $('#errorIngreso').text("¡Debes ingresar ambos campos!")
    }else{
        $("#formLogin").submit();
        $("#errorIngreso").text("")
    }
});

//Validación de formulario de registro
$('#registrar').on('click', function(e){
    e.preventDefault();
    var mail = $('#regEmail').val();
    var contraseña = $('#regContraseña').val();
    var contraseñaConf = $('#regContraseñaConf').val();
    var usuario = $('#regUser').val();
    if(usuario==="" || contraseña==="" || mail==="" || contraseñaConf===""){
        $('#errorRegistro').text("Hay campos incompletos");
    }else if(usuario.length<5 || contraseña.length<5){
        $('#errorRegistro').text("No puedes registrar un usuario o contraseña de menos de cinco caracteres");
    }else if(contraseña != contraseñaConf){
        $("#errorPass").text("La contraseña de confirmación no coincide")
        $("#errorRegistro").text("")
    }else{
        $("#formReg").submit();
        $("#errorPass").text("")
    }
});

$('#categorias').click( function(){
    $('#detalleCat').toggleClass('block show')
})