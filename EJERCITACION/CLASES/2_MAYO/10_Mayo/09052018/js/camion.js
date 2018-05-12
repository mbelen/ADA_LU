class Camion extends rodado{
	constructor(ejes, patente) {
		super(patente);
		this._ejes = ejes;
		this._velocidad;
	}

	set ejes(value){
		this._ejes = value;
	}

	get ejes() {
		return this._ejes;
	}

	get velocidad(){
		return this._velocidad;		
	}

	acelerar(aceleracion){
		this._velocidad += aceleracion;
	}

	frenar(){
		this._velocidad = 0;
	}

}

//los atributos, se usen o no, se definen todos en el constructor

/*No hay variables globales dentro de una clase. Lo más cercano a definir una variable global en 
una clase sería definir un atributo

*/