monto=670;
descuento=0;
pagoTarjeta=true;
cuotas=8;

if(monto<500){
	console.log("Monto a pagar: "+monto)

}if(monto>500 && monto<=1000){ 
descuento=0.1*monto;
monto=monto -descuento;
console.log("Descuento: "+descuento + " Monto a pagar: "+monto);

}if(monto>1000 && monto<=1500){
descuento=0.15*monto;
monto=monto -descuento;
console.log("Descuento: "+descuento + " Monto a pagar: "+monto);

}if(monto>1500) {
	descuento=0.2*monto;
	monto=monto -descuento;
	console.log("Descuento: "+descuento + " Monto a pagar "+monto);
};

/*OPCIÓN 1: Sin switch (anda)*/

/*
if(pagoTarjeta==true) {
	if(cuotas==3) {
		recargo=monto*0.05;
		monto=monto+recargo;
		console.log("Recargo: " +recargo + " total con recargo: " +monto);
	}
	
	if(cuotas==6) {
	recargo=monto*0.1;
	monto=monto+recargo;
	console.log("Recargo: " +recargo + " total con recargo: " +monto);
}
}*/


/*OPCIÓN 2: Con switch (también anda)*/

if(pagoTarjeta==true) {
	switch(cuotas) {
		case 1:
		case 2:
		console.log("No hay recargo para una o dos cuotas"); break;
		case 3: recargo=monto*0.05;
		console.log("Recargo: " +recargo); break;
		case 6: recargo=monto*0.1;
		console.log("Recargo: " +recargo); break;
		default: recargo=0
		console.log("No hay recargo"); break;
	}
}