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
	value:"Vegan",
	light:"si"
},
{
	name:"Postre vegan 2",
	value:"Vegan",
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
}]

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
var principalCeliaca = $("input[value='postregluten']")			

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
		if(postreTodas.is(":checked")){
			if($("input[value='no']").is(":checked")){
				$("#selectPostre").children().remove();
				for(i=0;i<postres.length;i++){
					var option = `<option>${postres[i].name}</option>`;
					$("#selectPostre").append(option);
				}

			}else if($("input[value='si']").is(":checked")){
				for(i=0;i<postres.length;i++){
					if(postres[i].light==="si") {
						$("#selectPostre").children().remove();	
						console.log("whaaat")
						var option = `<option>${postres[i].name}</option>`;
						$("#selectPostre").append(option);
					}
					
					
				}	
				
			}
		}
}


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

	console.log(principali);

	var menu = new Menu;
	menu.entrada = entrada._nombre 
	menu.principal = principali._nombre
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
