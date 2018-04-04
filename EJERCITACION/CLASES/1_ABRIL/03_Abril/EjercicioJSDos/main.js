var animal="boa";

switch(animal) {
	case "perezoso":
	case "koala":
	case "guacamayo":
	var herviboro=true;
	var patas=2;break;
	case "elefante":
	var herviboro=true;
	var patas=4;
	var nombre="Babaar"; break;
	case "tigre":
	var patas=4;
	var herviboro=false;break;
	case "boa":
	var patas=0;
	var herviboro=false; break;
}

if(herviboro==true) {
	if(patas==2) {
		kilos=1.5;
		console.log("El " + animal + " necesita " + kilos + " kilos de vegetales");
	}
	if(patas==4) {
		kilos=3;
		console.log("El " + animal + " necesita " + kilos + " kilos de vegetales y se llama " +nombre);
	}
}

else {
	if(patas==4) {
		kilos=5
		console.log("El " + animal + " necesita " + kilos + " kilos de carne");
	}

	if(patas==0) {
		comida="cobayo";
		console.log("La " + animal + " necesita un " + comida);

	}
}

