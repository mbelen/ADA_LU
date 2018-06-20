function foobar(num){
	var miArray = [];
	var cont = 1;
	while(cont<=num){
		miArray.push(cont);
		cont++;
	};

	for(i=0;i<miArray.length;i++){
		if((miArray[i]%3)===0){
			if(miArray[i]%5===0){
				miArray[i]="foobar"
			}else{
				miArray[i]="foo";
			}
		}
		else if(miArray[i]%5===0){
			miArray[i]="bar"
		}
		
	}
	return miArray
};
;

//Si hay condiciones que van de lo más general a lo más específico, conviene arrancar por la más específica PORQUE VA A ENTRAR POR ESA
//No hacía falta hacer un iterador para hacer números y después otro para recorrerlos. Podía crear los números en el mismo for.
//Podría haber creado los números y usar un map con la condición que busco para modificar.
var miArray = foobar(15);
console.log(miArray);

function similaritiesOfSum(miArray){
	for(i=0;i<miArray.length;i++){
		console.log(miArray[i]);
		var nuevosStrings;
		for(j=0;j<miArray[i].length;j++){
			var extension = miArray[i].length;
			var nuevostring = miArray[i].substring(0, miArray[i].length - 1);
			console.log(nuevostring);
		}
};
}

similaritiesOfSum(["marmota"])
