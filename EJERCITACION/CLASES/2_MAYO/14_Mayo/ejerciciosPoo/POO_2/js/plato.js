class Plato {
	constructor(tipoDieta){
		this._tipoDieta = tipoDieta;
	}

	set tipoDieta(value){
		this._tipoDieta = value;
	}

	get tipoDieta(){
		return this._tipoDieta; 
	}
