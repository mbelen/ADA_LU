class Plato {
	constructor(nombre,tipo,vegano,vegetariano,aptoCeliaco){
		this._nombre = nombre;		
		this._tipo = tipo;
		this._vegano = vegano;
		this._vegetariano = vegetariano;
		this._aptoCeliaco = aptoCeliaco; //van a ser booleanos
	}

	//MÉTODOS MÁGICOS

	//nombre
	set nombre(value){
	this._nombre = nombre;
	}

	get nombre(){
		return this._nombre;
	}

	//tipo
	set tipo(value){
	this._tipo = tipo;
	}

	get tipo(){
		return this._tipo;
	}

	//vegano
	set vegano(value){
		this._vegano = vegano;
	}

	get vegano(){
		return this._vegano; 
	}

	//vegetariano
	set vegetariano(value){
		this._vegetariano = vegetariano;
	}

	get vegetariano(){
		return this._vegetariano; 
	}

	//apto celíaco
	set aptoCeliaco(value){
		this._aptoCeliaco = aptoCeliaco;
	}

	get aptoCeliaco(){
		return this._aptoCeliaco; 
	}
}