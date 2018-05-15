class Postre extends Plato {
	constructor(nombre,tipo,vegano,vegetariano,aptoCeliaco,lightness){
		super(nombre,tipo,vegano,vegetariano,aptoCeliaco);
		this._tipo = tipo
		this._lightness = lightness;
	}

	//MÉTODOS MÁGICOS

	//lightness
	set lightness(value){
		this._lightness = lightness;
	}

	get lightness(){
		return this._lightness; 
	}

}