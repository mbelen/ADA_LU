var fs = require('fs')

const self = {};
var usuarios = [];


/** Función que renderiza el formulario*/
self.renderForm = function(req,res,next){
res.render('form')
}

/** función que renderiza la lista de usuarios - se le pasa la variable "usuarios*/
self.renderList = function(req,res,next){
res.render('list', {usuarios:usuarios})
}
/*
//Función de validación del lado de servidor que no estoy usando pero debo hacer
self.validacion = function(req,res,next){
	var nombre = req.body.nombre
	var apellido = req.body.apellido
	var mail = req.body.mail
	var tel = req.body.telefono
	var data = [nombre,apellido,mail,tel];
	var errores = [];
	for(i=0;i<data.length;i++){
		if(data[i]===""){
			var error = "Campo incompleto";
			errores.push(error);
		}
	}
}
*/

/**función que crea un nuevo objeto usuario a partir de lo recibido del formulario. Y crea el archivo de texto*/
self.nuevoUsuario = function(req,res,next){
	let newUser = {}
	newUser.usuario = req.body.nombre
	newUser.apellido = req.body.apellido
	newUser.mail = req.body.mail
	newUser.tel = req.body.telefono
	console.log(newUser)
	usuarios.push(newUser)
	
	/** guardo mis usuarios en un objeto y lo convierto en un string*/
	var usuariosTextos = JSON.stringify({"usuarios":usuarios})
	/**Escribo mi objeto en un archivo.txt*/
	fs.writeFile('./public/miTexto.txt', usuariosTextos, function (err) {
    if (err) {
        res.render('error', {message:"¡Parece que algo falló en el registro!"})
    }else{
    	console.log("Agregué texto en miTexto")
    }
    
});
	console.log(usuarios)
	res.redirect('/user/list')
};
module.exports = self;

