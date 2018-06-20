console.log("cárgame sésamo")

function mostrarAdd(class){
	var form = document.getElementById('formAgregar');
	form.classList.remove(class);
}

mostrarAdd('invisible')