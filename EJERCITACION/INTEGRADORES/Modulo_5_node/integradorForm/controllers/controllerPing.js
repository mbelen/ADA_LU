const self = {};

/**Renderizo el index y le paso la variable "mensaje"*/
self.pingPong = function(req,res,next){
res.render('index', {mensaje:"¡Pong!", imagen:"/images/pingPong.jpg"})
}

module.exports = self;

