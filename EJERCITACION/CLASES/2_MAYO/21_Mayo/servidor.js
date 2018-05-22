/*var http =require('http');
var puerto = 8080;

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Hola Mundo!');
//Creo el servidor.
res.end();

}).listen(puerto,function(){

	console.log(`Escuchando puerto ${puerto}`);
});*/

/*var http =require('http');
var puerto = 8080;

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(req.url);
//Creo el servidor.
res.end();

}).listen(puerto,function(){
	console.log(`Escuchando puerto ${puerto}`);
});*/

var http =require('http');
var puerto = 8080;
var miModulo = require('./modulo');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
console.log(req.url);
if(req.url == "/random") {
	res.write(miModulo.random());
}else{
	res.write(miModulo.saludo())}
//Creo el servidor.
res.end();

}).listen(puerto,function(){
	console.log(`Escuchando puerto ${puerto}`);
});