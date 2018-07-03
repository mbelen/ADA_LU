let jsonData = {}; //Los objetos json van entre llaves (los json SON OBJETOS)
//No hace falta que el nombre de la variable tenga la palabra "json"
jsonData.cumple = { //Le creo un atributo a mi objeto (puede ser el que yo quiera, cualquier palabra)
		"id": 1,
		"name": "Pepa",
		"email": "lego batman",//Es estático porque es un ejemplo, normalmente es dinámico
		"cumple": "24-04-2018"
		};

console.log(jsonData); //Cuando lo consoleás, aparece como Object y los datos

console.log(JSON.stringify(jsonData)); //Así lo consoleo como un string.
//Acá sí el JSON es inescapable
localStorage.setItem("jsonData", JSON.stringify(jsonData));
//Esto es lo que voy a guardar, el primer parámetro es el nombre de la variabla y esl segundo es el valor
let jsonDataGuardado = JSON.parse(localStorage.getItem("jsonData"));
//Revierte la transformación (pasa de ser un string a volver a ser un objeto)
