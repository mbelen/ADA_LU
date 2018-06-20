var express = require('express');
var router = express.Router();
let usuarios = [
{
	usuario:"test",
	pass:"test",
	mail:"test"
}];

/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('indexLogin');
});

router.get('/registrarse', function(req,res,next){
	res.render('indexReg');
})

router.post('/newuser',function(req,res,next){
	let newUser = {}
	newUser.usuario = req.body.regUser
	newUser.pass = req.body.regPass
	newUser.mail = req.body.regMail
	console.log(newUser)
	usuarios.push(newUser)
	res.redirect('/registro')
	console.log(usuarios)
});

router.post('/ingreso', function(req,res,next){
	let userId = req.body.logUser;
	let passId = req.body.logPass;
	console.log(userId + passId)
	for(i=0;i<usuarios.length;i++){
		if(userId===usuarios[i].usuario && passId===usuarios[i].pass){
			var valido=true
		}else if(userId===usuarios[i].usuario && passId!=usuarios[i].pass){
		res.render('indexLogin', {error:"contraseña no válida"}) //creo que anda. Hay que testearlo más
		}
	if(valido){
	res.render('indexLogueado', {usuario:userId})
	}
	
}})


module.exports = router;
