class Auto{ // Las clases van en singular y con 1° letra mayúscula. 
	
	/**
	 *  Constructor
	 *  
	 **/ 
	constructor (patente=""){ //"constructor" es palabra reservada. Tengo que tener definido un constructor por clase
	//Parámetros: puedo asignarle a "patente" un valor al crear el objeto. En este caso le pasamos el valor que trajimos del formulario
	// el ="" me permite no pasarle nada y que el objeto se cree igual.
	//Los atributos que se establecen en el constructor son a criterio propio.
		this._patente = patente;
	}

	//Los métodos son como funciones

	// setters y getters
	/*La idea del paradigma de objetos es que yo no pueda acceder a las propiedades de forma pública.
	El objeto tiene atributos y métodos. 
	"Responsabiliza" al objeto de crear sus propios atributos
	es "_patente" para evitar referencias circulares. Al decir set patente estoy haciendo referencia
	al atributo que hice. Let y get "encapsulan" para que yo no acceda directamente al atributo.
	Los métodos "enmascaran" a la propiedad o el atributo. Entonces, se llaman casi igual pero no
	exactamente. Porque si no, en la clase, no va a saber si estoy llamando el atributo o el método.
	*/

	set patente(value){  
	/*Asignar el set me permite modificar el atributo que creé en el constructor. Me deja pisar el valor*/

		this._patente = value;
	}

	get patente(){
		return this._patente;		
	}

	// metodo para recuperar la patente

	getPatente(){

		return this._patente;
	}

}







