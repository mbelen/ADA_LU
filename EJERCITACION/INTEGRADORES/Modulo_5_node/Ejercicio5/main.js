var http = require('http');
var puerto = 8080;
var miModulo = require('./modulo');
var url = require('url');
http.createServer(function(req,res){

	res.writeHead(200, {'Content-type':'text/html'});
	var q = String(req.url);
	if(q==="/"){
		res.end("inserte su edad")
	}else{
	var edad = q.substring(1);
	console.log(edad)
	let respuesta = miModulo.edad(edad)
	//res.write(respuesta);
	res.end(respuesta);
}
}).listen(8080);














