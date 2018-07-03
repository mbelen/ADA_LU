class Materia {
	constructor(nombre,horarios){
		this._nombre = nombre;
		this._horarios = horarios;
		this._notas = [];
	}

	set nombre(value){
		this._nombre = value;
	}

	get nombre() {
		return this._nombre;
	} //etc

	addNota(nota){
		this._notas.push(nota);
	}

	calcularPromedioMateria(){
		let largoNotas = this._notas.length;
		console.log(largoNotas)
		let total = 0;
		var i;
		for(i=0;i<largoNotas;i++){
			total += this._notas[i];
		}
		let promedio = total/largoNotas;
		return promedio;
	}
}