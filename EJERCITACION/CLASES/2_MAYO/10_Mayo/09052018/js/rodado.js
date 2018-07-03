class rodado {
	constructor(patente) {
		this._patente = patente;
	}

	set patente(value){  
		this._patente = value;
	}

	get patente(){
		return this._patente;		
	}
} 