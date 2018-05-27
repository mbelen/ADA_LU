exports.edad = function(num){
	if(num>-1 && num<18){
		return "Es menor de edad"
	}else if(num>18){
		return "Es mayor de edad"
	}else{
		return "ingrese un dato válido"
	}

}