const service = require('../services/panchoService')
const self = {};

/****Función que carga la vista individual de cada animal******/
self.cargarVista = function(req,res,next){
	let miAnimal = req.params.id;
	//Chequea que el animal exista
	var animal = service.buscar(miAnimal)
	//Si lo encuentra, hace la vista
	if(animal){
		res.render('indexVista', {animal:animal});
	}
	//Si no lo encuentra, notifica que no existe
	else{
		res.render('error', {mensaje:"¡Pancho inexistente!", detalle:"¡Parece que el pancho que estás buscando no existe!"});
	}
}

/***Función recibe de public los datos de favoritos y los guarda en el servidor***/
self.obtenerFavorito = function(req,res,next){
	//Obtengo el nombre del perro enviado en la llamada ajax
	var favorito = (JSON.parse(req.body.info)).favorito;
	//Guardo el favorito usando la función del service
	service.crearFavoritos(favorito);
	//RESPUESTA A LA LLAMADA
	res.send("se recibió la respuesta")
}

/****Función que filtra el array de animales según lo solicitado en el formulario****/
self.filtrarForm = function(req,res,next){
	//recupero los datos que se enviaron con el submit del formulario
	var especie = req.body.especie.toLowerCase();
	var edad = req.body.edad.toLowerCase();
	var tamaño = req.body.tamaño.toLowerCase();
    //filtro por especie
	if(especie!="todas"){
		filtroEspecie = service.animales().filter(function(item){return item.especie===especie});
	}else{
		filtroEspecie = service.animales();
	}
	//filtro por edad
	if(edad!="todas"){
		filtroEspecie = filtroEspecie.filter(function(item){return item.edad===edad})
	}
	//filtro por tamaño
	if(tamaño!="todos"){
		filtroEspecie = filtroEspecie.filter(function(item){return item.tamaño===tamaño})
	}
	//Si no hay animales que coincidan con la búsqueda, me avisa
	if(filtroEspecie.length===0){
		res.render("error", {mensaje:"¡No hay panchos!", detalle:"Parece que no hay panchos que coincidan con tu criterio de búsqueda"})
	//Si hay, me lleva a la primera página del array filtrado
	}else{
	res.redirect('/pancho/filtro/1')
};	
}

/****Función que renderiza las vistas por página****/
self.renderizar = function(req,res,next){
	//verifico cuántas páginas voy a necesitar 
	var cantPaginas = filtroEspecie.length/4;
	if(!Number.isInteger(cantPaginas)){
		paginas = Math.floor(cantPaginas + 1)
	}else{
		paginas = cantPaginas
	}

	//creo un array con los números de las páginas necesarias (lo voy a pasar como variable para la vista)
    var arrayPaginas = Array(paginas).fill().map((e,i)=>i+1);
	var numeroParams = req.params.page 
	if(!isNaN(numeroParams) && numeroParams<=paginas && numeroParams>0){
		var numero= numeroParams - 1;
	}else{
		res.render('error', {mensaje:"¡Página inexistente!", detalle:"¡Oh, no! ¡Parece que la página que estás buscando no existe!"}) 
	}
	
	//creo el intervalo que se va a mostrar del array
	var principioIntervalo = numero*4;
	var finIntervalo = principioIntervalo + 4;
	var animalesPagina = filtroEspecie.slice(principioIntervalo,finIntervalo) 
	
	//RENDER
	res.render('index', {animales:animalesPagina, paginas:arrayPaginas})
}

module.exports = self;