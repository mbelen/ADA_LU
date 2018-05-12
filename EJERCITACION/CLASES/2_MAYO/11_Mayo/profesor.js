class Profesor extends Persona {
	constructor(nombre,apellido,fecha,documento,sueldo) {
		super(nombre,apellido,fecha,documento);
		this._sueldo = sueldo;

	}

	set sueldo(value){
		this._sueldo = value;
	}

	get sueldo() {
		return this._sueldo;
	}
}