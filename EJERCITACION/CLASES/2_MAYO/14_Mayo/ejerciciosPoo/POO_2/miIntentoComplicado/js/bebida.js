class Bebida {
	constructor(nombre,alcohol){
		this._nombre = nombre
		this._alcohol = alcohol;
	}

	//MÉTODOS MÁGICOS

	//nombre
	set nombre(value){
		this._nombre = nombre;
	}

	get nombre(){
		return this._nombre;

	}

	//alcohol
	set alcohol(value){
		this._alcohol = alcohol;
	}

	get alcohol(){
		return this._alcohol; 
	}
}