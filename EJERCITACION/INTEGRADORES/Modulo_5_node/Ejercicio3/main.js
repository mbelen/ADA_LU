var http = require('http');
var puerto = 8080;
var miModulo = require('./modulo');
var url = require('url');
http.createServer(function(req,res){

	res.writeHead(200, {'Content-type':'text/html'});
	var q = String(req.url);
	var nombre = q.substring(1);
	console.log(nombre)
	let respuesta = miModulo.capital(nombre)
	//res.write(respuesta);
	res.end(respuesta);
}).listen(8080);














