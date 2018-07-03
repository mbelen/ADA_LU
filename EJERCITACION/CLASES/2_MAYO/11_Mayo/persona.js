class Persona {
	constructor(nombre, apellido, fecha, documento){
		this._nombre = nombre;
		this._apellido = apellido;
		this._fechaNacimiento = fecha;
		this._documento = documento;
	}

	set nombre(value){
		this._nombre = value;
	};

	get nombre(){
		return this._nombre; 
 	} //etc.




 	set fechaNacimiento(value){
 		this._fechaNacimiento = value;
 	}

 	get fechaNacimiento(){
 		return this._fechaNacimiento;
 	}

 	getEdad(){
 		let hoy = "2018-05-11"; //debería ser new Date()
 		return (hoy - this._fechaNacimiento); //esto no va a andar así, es un ejemplo.
 	}

}