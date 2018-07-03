
//creo objeto

const self = {};

//creo función
self.index = function(req,res,next){
	res.render('index', {title:"Soy una vista"})
}
console.log(self);


//exporto
module.exports = self;

//Opción b que hace lo mismo
/*
module.exports = {
	usersList:function(req,res,next){
		res.render('index', {title:"Soy una vista"})
	}
}
*/