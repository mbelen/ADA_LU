class Menu {
	constructor(entrada="",principal="",postre="",bebida=""){
		this._entrada = entrada;
		this._principal = principal;
		this._postre = postre;
		this._bebida = bebida;

	}

	//MÉTODOS MÁGICOS
	set entrada(value){
		this._entrada = value;
	}

	get entrada(){
		return this._entrada; 
	}

	set principal(value){
		this._principal = value;
	}

	get principal(){
		return this._principal; 
	}

	set postre(value){
		this._postre = value;
	}

	get postre(){
		return this._postre; 
	}

	set bebida(value){
		this._bebida = value;
	}

	get postre(){
		return this._bebida; 
	}

	mostrarMenu(){
		$("#print").children().remove();
		var print = `<div><h3>Tu Pedido</h3><p>Entrada: ${this._entrada}</p><p>Plato principal: ${this._principal}</p><p>Postre: ${this._postre}</p><p>Bebida: ${this._bebida}</div>`
		$("#print").append(print)
	}
}
