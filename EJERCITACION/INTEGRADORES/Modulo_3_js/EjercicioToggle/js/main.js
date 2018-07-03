console.log("cargado");
function cambio() {
$('#filauno').on('click', function(e){
	$(this).toggleClass("unaclase claseuno")
})

$('#dosuno').on('click', function(e){
	$(this).next().toggleClass("dos dosdos");
})

$('#dosdos').on('click', function(e){
	$(this).prev().toggleClass("dos dosdos")
	})

$('#tresdos').on('click', function(e){
	$(this).siblings().toggleClass("tres ultima");
	})
}

cambio()
