/////EJEMPLO CLASE PADRE////////

class Persona {
	constructor(nombre, apellido, fecha, dni){
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

/////////CLASE ALUMNX (debería ir en archivo aparte)///////////////////

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

///Clase materia (no tiene relación de herencia con alumno. Y TAMBIÉN debería estar en archivo aparte)

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
		let largoNotas = this.notas.length;
		let total = 0;
		for(i=0;i<largoNotas;i++){
			total += this._notas[i];
		}
		let promedio = total/largo;
		return promedio;
	}
}

/////////////////////////Clase profesor (que TAMBIÉN debería estar en archivo aparte)////////////////
class profesor extends persona {
	constructor(nombre,apellido,fecha,dni,sueldo) {
		super(nombre,apellido,fecha,dni);
		this._sueldo;

	}

	set sueldo(value){
		this._sueldo = value;
	}

	get sueldo() {
		return this._sueldo;
	}
}

/*

***OBJETOS EN JAVASCRIPT***

*Herencia*

- Las propiedades (o sea, los atributos) heredadas no se pueden pisar. Puedo usar las que vienen o agregar nuevas. Las que no me sirven, no las uso.
- Los métodos sí se pueden pisar. JS siempre va a buscar (y aplicar) primero el método que encuentre en la clase hija. Si no la encuentra, la buscará en el padre.
- En el paréntesis del constructor van todos los atributos, los del padre y los propios.
El constructor en herencia

class perro extends animal {
	constructor(patas,raza){
	super(patas);
	this.raza = raza;
	}
}

Con el super, me traigo los atributos que definí en la clase padre. El super es el constructor del padre.

RELACIONES DE LOS OBJETOS	
- Composición
- Agregación
- Asociación

Composición
Relación en la que no tiene sentido un objeto sin el otro. El ejemplo más común es una tabla.
El objeto "a" compone al objeto "b" (por ejemplo, los ladrillos a una casa)
Agregación
Relación en que un objeto agrega/suma al otro (por ejemplo, en nuestro caso, la materia con el alumno).
El objeto "a" le suma al objeto "b" (por ejemplo, fideos y salsa)
Asociación
Relación en la que los objetos ocasionalmente hace usos uno del otro (los dos objetos existen y andan
y capaz alguna vez se juntan, ponele).
*/