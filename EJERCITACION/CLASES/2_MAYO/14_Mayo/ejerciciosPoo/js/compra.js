class Compra {
	constructor(subtotal,descuento,subtotalconDescuento,subtotalFinanciado,cuotas,pesaje,distancia){
		this._subtotal = subtotal;
		this._descuento = descuento;
		this._subtotalconDescuento;
		this._subtotalFinanciado;
		this._cuotas = cuotas
		this._pesaje = pesaje;
		this._distancia = distancia;
	}

	set subtotal(value){
		this._subtotal = value;
	}

	get subtotal(){
		return this._subtotal; 
	}

	set descuento(value){
		this._descuento = value;
	}

	get descuento(){
		return this._descuento; 
	}

	set cuotas(value){
		this._cuotas = value;
	}

	get cuotas(){
		return this._cuotas; 
	}

	set pesaje(value){
		this._pesaje = value;
	}

	get pesaje(){
		return this._pesaje; 
	}

	set distancia(value){
		this._distancia = value;
	}

	get distancia(){
		return this._distancia; 
	}

	getDescuento(){
		var bruto = this._subtotal;
		var porcentual = this._descuento;
		var subtotalDescontado = bruto - ((bruto*porcentual)/100);
		this._subtotalconDescuento=subtotalDescontado;
		return subtotalDescontado
	}

	getFinanciacion(){
		var bruto = this._subtotalconDescuento;
		console.log(bruto);
		var cantCuotas = this._cuotas;

		switch(cantCuotas){
			case 3:this._subtotalFinanciado=bruto*1.1;break;
			case 6:this._subtotalFinanciado=bruto*1.25;break;
			case 12:this._subtotalFinanciado=bruto*1.3;break;
		}

		return this._subtotalFinanciado;
	}

	getEnvio(){
		var bruto = this._subtotal_Financiado;
		var pesaje = this._pesaje;
		var distancia = this._distancia;

		switch(true){
			case pesaje<10 && distancia<20: this._total=bruto;break;
			case pesaje<10 && distancia>20: var recargo =(((distancia-20)/5)*15);
											this._total=bruto+recargo;break; 
		}
	}
}
