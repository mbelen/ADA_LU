exports.signo = function(m,d){

	let day = parseInt(d);

	if(isNaN(day)){ return "Ingrese un dia valido";}		

	switch(m){

		case '1': 
			if( day >= 20){

				return "Acuario";
			
			}else{

				return "Capricornio";
			}

		break;

		case '2': 
			if( day <= 19){

				return "Acuario";
			
			}else{

				return "Piscis";
			}

		break;


		case '3': 
			if( day <= 20){

				return "Piscis";
			
			}else{

				return "Aries";
			}

		break;


		case '4': 
			if( day <= 19){

				return "Aries";
			
			}else{

			
				return "Tauro";
			}

		break;


		case '5': 
			if( day <= 20){

				return "Tauro";
			
			}else{

				return "Géminis";
			}

		break;


		case '6': 
			if( day < 21){

				return "Géminis";
			
			}else{

				return "Cáncer";
			}

		break;


		case '7': 
			if( day <= 22){

				return "Cáncer";
			
			}else{

				return "Leo";
			}

		break;


		case '8': 
			if( day <= 23){

				return "Leo";
			
			}else{

				return "Virgo";
			}

		break;


		case '9': 
			if( day <= 22){

				return "Virgo";
			
			}else{

				return "Libra";
			}

		break;


		case '10': 
			if( day <= 22){

				return "Libra";
			
			}else{

				return "Escorpio";
			}

		break;


		case '11': 
			if( day <= 21){

				return "Escorpio";
			
			}else{

				return "Sagitario";
			}

		break;


		case '12': 
			if( day <= 21){

				return "Sagitario";
			
			}else{

				return "Capricornio";
			}

		break;

		default: 
				return "Ingrese un mes valido";
		break;			
	}
}