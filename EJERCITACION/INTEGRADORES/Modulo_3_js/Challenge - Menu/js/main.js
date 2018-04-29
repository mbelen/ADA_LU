//En progreso: falta crear los elementos dinámicamente al tocar enviar

//////////////////VARIABLES//////////////////////////
//VARIABLES GLOBALES

var principal = ['tarta de jamón y queso','ensalada caprese','milanesa','1/4 de pollo'];
var guarnicion = ['ensalada mixta','papas fritas','pure de zapallo'];
var postre = ['flan con crema','queso y dulce','mousse de chocolate'];

//Función de carga 

function cargar() {
	var platop = document.getElementById('platoprincipal');
	var guarni = document.getElementById('guarnicion')
	var postri = document.getElementById('postre')
	for(i=0; i<principal.length;i++) {
		var item = document.createElement('option');
		item.value = (i+1);
		item.innerHTML = (principal[i]);
		platop.appendChild(item);
	}

	for(i=0; i<guarnicion.length;i++) {
		var guar = document.createElement('option');
		guar.value = (i+1);
		guar.innerHTML = (guarnicion[i]);
		guarni.appendChild(guar);
	}

	for(i=0; i<postre.length;i++) {
		var post = document.createElement('option');
		post.value = (i+1);
		post.innerHTML = (postre[i]);
		postri.appendChild(post);
	}

}

cargar()