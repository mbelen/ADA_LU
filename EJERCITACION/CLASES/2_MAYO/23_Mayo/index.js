console.log("WHY")

/*var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-type':'text/html'});
	res.write('Hola Mundo');
	res.end();
}).listen(8080);*/
/*
var express = require('express');
var app = express();

app.get('/',function(req,res){ //le pido un get en la dirección "/" - o sea, localhost3000/ - y que, al escucharlo, ejecute la función
	res.send("Hola mundo");
});

app.get('/hola',function(req,res){
	res.send("Adiós mundo");
})
app.listen(3000, function(){
	console.log("Estoy escuchando")
});

var express = require (' express ');
var router =  express.Router (); 
router.get('/', function function(req , res){ 
	res.send('GET route on customer).');
});
router.post('/', function(req , res) {
	res.send('POST route on customer customer.');
});

module.exports = router ; //Exporto un objeto, que es el que creé (es parecido al exports que vimos con Belén)
*/
var express = require('express');
var app = express();

/*app.get('/', function(req,res){
	res.send('hola')
});*/

var router = express.Router();
router.get('/', function(req,res){
	res.send('listado de clientes')
});

router.post('/customer', function(req,res){
	res.send('crear nuevo cliente')
});

module.exports = router;

app.listen(3000);
//No estaría andando, ver.

//