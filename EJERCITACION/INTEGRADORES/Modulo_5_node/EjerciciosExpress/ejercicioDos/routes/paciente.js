var express = require('express');
var router = express.Router();
var personas = [
	{ 
		dni: "25402102",
		nombre : "Jaime Suarez", 
		edad: 25, 
		gs: "A+",
		alergias: "No posee"
	},
	{
		dni: "30401101",
		nombre : "Jeremías Suarez", 
		edad: 29, 
		gs: "A",
		alergias: "Payasos"
	},
	{
		dni: "31431145",
		nombre : "Lisa Simpson", 
		edad: 8, 
		gs: "0",
		alergias: "Abejas"
	}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Ingrese el DNI del paciente');
});

router.get('/:dni', function(req, res, next){
	let doc = req.params.dni;
	for(i=0;i=personas.length;i++){
		if(doc===personas[0].dni){
			res.render('indexPaciente', {nombre:personas[i].nombre})
		}
	}
});

module.exports = router;
