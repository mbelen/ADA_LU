/*
Cosas para resolver
Por ahora, solamente andan las entradas y platos principales.
Falta postre y bebida.
HAY QUE VALIDAR EL FORMULARIO. AHORA SE ENVÍA VACÍO
Tengo que cambiar el valor que toma para determinar si el plato es o no veggie, vegan, 
etc. Por ahora, toma el input que seleccione, pero de este modo no distingue si alguien
que seleccionó entre todas las opciones, elige un plato vegetariano, celíaco etc.
También ver cómo se puede adaptar para que las opciones dietarias no se excluyan 
mutuamente (es decir, para que alguien pueda ser vegano y celíaco a la vez, x ej)

*/

console.log("cargado");

var entradas = [
{
	name:"Entrada omnívora 1",
	value:"omni"
},
{
	name:"Entrada veggie 1",
	value:"veggie"
},
{
	name:"Entrada vegan 1",
	value:"vegan"
},
{
	name:"Entrada celiac 1",
	value:"celiac"
}
]

var principales = [
{
	name:"Principal omnívoro 1",
	value:"omni"
},
{
	name:"Principal veggie 1",
	value:"veggie"
},
{
	name:"Principal vegan 1",
	value:"vegan"
},
{
	name:"Principal celiac 1",
	value:"celiac"
}
];

var postres = [
{
	name: "Postre omnívoro 1",
	value:"omni",
	light:"si"
},
{
	name: "Postre omnívoro 2",
	value: "omni",
	light:"no"
},
{
	name:"Postre veggie 1",
	value:"veggie",
	light:"si"
},
{
	name:"Postre veggie 2",
	value:"veggie",
	light:"no"
},
{
	name:"Postre vegan 1",
	value:"vegan",
	light:"si"
},
{
	name:"Postre vegan 2",
	value:"vegan",
	light:"no"
},
{
	name:"Postre celiac 1",
	value:"celiac",
	light:"si"
},
{
	name:"Postre celiac 2",
	value:"celiac",
	light:"no"
}];

var bebidas = [
{
	name:"Bebida alcohólica 1",
	alcohol:"si"
},
{
	name:"Bebida alcohólica 2",
	alcohol:"si",
},
{
	name:"Bebida sin alcohol 1",
	alcohol:"no",
},
{
	name:"Bebida sin alcohol 2",
	alcohol:"no"
}
]

var entradaTodas = $("input[value='entradatodas']");
var entradaVegetariana = $("input[value='entradavegetariano']");
var entradaVegana = $("input[value='entradavegano']");
var entradaCeliaca = $("input[value='entradagluten']");
var principalTodas = $("input[value='ppaltodas']");
var principalVegetariana = $("input[value='ppalvegetariano']");
var principalVegana = $("input[value='ppalvegano']");
var principalCeliaca = $("input[value='ppalgluten']");
var postreTodas = $("input[value='postretodos']");
var postreVegetariana = $("input[value='postrevegetariano']");
var postreVegana = $("input[value='postrevegano']");
var postreCeliaca = $("input[value='postregluten']")			

function cargarEntradas(){
	if(entradaTodas.is(":checked")){
		$("#selectEntrada").children().remove();
		for(i=0;i<entradas.length;i++){

			var option = `<option>${entradas[i].name}</option>`
			$("#selectEntrada").append(option)
		}
	}else if(entradaVegetariana.is(":checked")){
		$("#selectEntrada").children().remove();
		for(i=0;i<entradas.length;i++){
			if(entradas[i].value === "veggie")
			var option = `<option>${entradas[i].name}</option>`
		}
		$("#selectEntrada").append(option)
	}else if(entradaVegana.is(":checked")){
		$("#selectEntrada").children().remove();
		for(i=0;i<entradas.length;i++){
			if(entradas[i].value === "vegan")
			var option = `<option>${entradas[i].name}</option>`
			
		}
		$("#selectEntrada").append(option)
	}else if(entradaCeliaca.is(":checked")){
		$("#selectEntrada").children().remove();
		for(i=0;i<entradas.length;i++){
			if(entradas[i].value === "celiac")
			var option = `<option>${entradas[i].name}</option>`
			
		}
		$("#selectEntrada").append(option)
	}	
}

function cargarPrincipales(){
	if(principalTodas.is(":checked")){
		$("#selectPpal").children().remove();
		for(i=0;i<principales.length;i++){

			var option = `<option>${principales[i].name}</option>`
			$("#selectPpal").append(option)
		}
	}else if(principalVegetariana.is(":checked")){
		$("#selectPpal").children().remove();
		for(i=0;i<principales.length;i++){
			if(principales[i].value === "veggie")
			var option = `<option>${principales[i].name}</option>`
			
		}
	$("#selectPpal").append(option)
	}else if(principalVegana.is(":checked")){
		$("#selectPpal").children().remove();
		for(i=0;i<principales.length;i++){
			if(principales[i].value === "vegan")
			var option = `<option>${principales[i].name}</option>`
			
		}
		$("#selectPpal").append(option)
	}else if(principalCeliaca.is(":checked")){
		$("#selectPpal").children().remove();
		for(i=0;i<principales.length;i++){
			if(principales[i].value === "celiac")
			var option = `<option>${principales[i].name}</option>`
			
		}
		$("#selectPpal").append(option)
	}	
}

function cargarPostres() {
	if(postreTodas.is(":checked" ) && $("input[value='nolight']").is(":checked")){
		console.log("entrando")
		$("#selectPostre").children().remove();
		for(i=0;i<postres.length;i++){

			var option = `<option>${postres[i].name}</option>`
			$("#selectPostre").append(option)
		}
	}else if(postreTodas.is(":checked" ) && $("input[value='silight']").is(":checked")){
		$("#selectPostre").children().remove();
		for(i=0;i<postres.length;i++){
			if(postres[i].light==="si"){
			var option = `<option>${postres[i].name}</option>`
			$("#selectPostre").append(option)
			}
		}
	}else if(postreVegetariana.is(":checked") && $("input[value='nolight']").is(":checked")){
		$("#selectPostre").children().remove();
		for(i=0;i<postres.length;i++){
			if(postres[i].value==="veggie"){
			var option = `<option>${postres[i].name}</option>`
			$("#selectPostre").append(option)
			}
		}
	}else if(postreVegetariana.is(":checked") && $("input[value='silight']").is(":checked")){
		$("#selectPostre").children().remove();
		for(i=0;i<postres.length;i++){
			if(postres[i].value==="veggie" && postres[i].light==="si"){
			var option = `<option>${postres[i].name}</option>`
			$("#selectPostre").append(option)
			}
		}	
	}else if(postreVegana.is(":checked") && $("input[value='nolight']").is(':checked')){
		$("#selectPostre").children().remove();
		for(i=0;i<postres.length;i++){
			if(postres[i].value==="vegan"){
			var option = `<option>${postres[i].name}</option>`
			$("#selectPostre").append(option)
			}
		}

	}else if(postreVegana.is(":checked")&& $("input[value='silight']").is(':checked')){
		$("#selectPostre").children().remove();
		for(i=0;i<postres.length;i++){
			if(postres[i].value==="vegan" && postres[i].light==="si"){
			var option = `<option>${postres[i].name}</option>`
			$("#selectPostre").append(option)
			}
		}

	}else if(postreCeliaca.is(":checked")&&$("input[value='nolight']").is(':checked')){
		$("#selectPostre").children().remove();
		for(i=0;i<postres.length;i++){
			if(postres[i].value==="celiac"){
			var option = `<option>${postres[i].name}</option>`
			$("#selectPostre").append(option)
			}
		}

	}else if(postreCeliaca.is(":checked")&&$("input[value='silight']").is(':checked')){
		$("#selectPostre").children().remove();
		for(i=0;i<postres.length;i++){
			if(postres[i].value==="celiac" && postres[i].light==="si"){
			var option = `<option>${postres[i].name}</option>`
			$("#selectPostre").append(option)
			}
		}
	}
}		

function cargarBebidas()
{
	if($("input[value='sialcohol']").is(':checked')){
		$("#selectBebidas").children().remove();
		for(i=0;i<bebidas.length;i++){
			if(bebidas[i].alcohol==="si"){
			var option = `<option>${bebidas[i].name}</option>`
			$("#selectBebidas").append(option)
			}}
	}else if($("input[value='noalcohol']").is(':checked')){
		$("#selectBebidas").children().remove();
		for(i=0;i<bebidas.length;i++){
			if(bebidas[i].alcohol==="no"){
			var option = `<option>${bebidas[i].name}</option>`
			$("#selectBebidas").append(option)
			}
	}
}	}


$("#enviar").on('click', function crear() {
	var entrada = new Plato;
	entrada._nombre = $("#selectEntrada :selected").val();
	entrada._tipo = "Entrada";
	if(entradaTodas.is(":checked")){
		entrada._vegano = false;
		entrada._vegetariano = false;
		entrada._aptoCeliaco = false;
	}else if(entradaVegetariana.is(":checked")){
		entrada._vegano = false;
		entrada._vegetariano = true;
		entrada._aptoCeliaco = false;
	}else if(entradaVegana.is(":checked")){
		entrada._vegano = true;
		entrada._vegetariano = true;
		entrada._aptoCeliaco = false;
	}else{
		entrada._vegano = false;
		entrada._vegetariano = false;
		entrada._aptoCeliaco = true;
	}

	console.log(entrada)

	var principali = new Plato;
	principali._nombre = $("#selectPpal :selected").val();
	principali._tipo = "Principal";
	if(principalTodas.is(":checked")){
		principali._vegano = false;
		principali._vegetariano = false;
		principali._aptoCeliaco = false;
	}else if(principalVegetariana.is(":checked")){
		principali._vegano = false;
		principali._vegetariano = true;
		principali._aptoCeliaco = false;
	}else if(principalVegana.is(":checked")){
		principali._vegano = true;
		principali._vegetariano = true;
		principali._aptoCeliaco = false;
	}else{
		principali._vegano = false;
		principali._vegetariano = false;
		principali._aptoCeliaco = true;
	}
	console.log(principali)

	var postri = new Postre;
	postri._nombre = $("#selectPostre :selected").val();
	postri._tipo = "Postre";
	if(postreTodas.is(":checked")){
		postri._vegano = false;
		postri._vegetariano = false;
		postri._aptoCeliaco = false;
	}else if(postreVegetariana.is(":checked")){
		postri._vegano = false;
		postri._vegetariano = true;
		postri._aptoCeliaco = false;
	}else if(postreVegana.is(":checked")){
		postri._vegano = true;
		postri._vegetariano = true;
		postri._aptoCeliaco = false;
	}else{
		postri._vegano = false;
		postri._vegetariano = false;
		postri._aptoCeliaco = true;
	}

	console.log(postri);
	var bebida = new Bebida
	bebida._nombre = $("#selectBebidas :selected").val();
	console.log(bebida)
	var menu = new Menu;
	menu.entrada = entrada._nombre 
	menu.principal = principali._nombre
	menu.postre = postri._nombre
	menu.mostrarMenu();
	console.log(menu);
})

entradaTodas.on('change',cargarEntradas);
entradaVegetariana.on('change',cargarEntradas);
entradaVegana.on('change', cargarEntradas);
entradaCeliaca.on('change', cargarEntradas);
principalTodas.on('change',cargarPrincipales);
principalVegetariana.on('change',cargarPrincipales);
principalVegana.on('change', cargarPrincipales);
principalCeliaca.on('change', cargarPrincipales);
 $("input[name='postre']").on('change', cargarPostres)
 $("input[name='light']").on('change', cargarPostres)
 $("input[name='alcohol']").on('change', cargarBebidas)
