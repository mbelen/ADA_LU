class Alumnx extends Persona {
	constructor(nombre,apellido,fecha,documento,legajo){
		super(nombre,apellido,fecha,documento);
		this._legajo = legajo;
		this._colegio;
		this._materias = [];
	}

	set legajo(value){
		this._legajo = value;
	}

	get legajo(){
		return this._legajo;
	}

	addMateria(materia){ //materia va a ser un objeto
		this._materias.push(materia);
	}

	//Calcula el promedio general de todas las materias
	calcularPromedio(){
		let largo = this._materias.length;
		let total = 0;
		var i;
		for(i=0;i<largo;i++){
			total += this._materias[i].calcularPromedioMateria();
		}
		let promedio = total/largo;
		return promedio;
	} 

	getMaterias(){
		//información que quiero que aparezca al listar las materias.
		return this._materias
	}
}