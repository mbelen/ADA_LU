const service = require('../services/panchoService')
const self = {}

self.renderHome = function(req,res,next){
	//Cuando vuelvo a la home, reseteo el filtro
	filtroEspecie = service.animales()
	res.render('vistaHome', {favoritos:service.favoritos()})
}

module.exports = self;