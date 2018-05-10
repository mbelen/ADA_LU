
	//Me traigo los comentarios desde jsonplaceholder. Luego, por cada comentario creado, hago un lid que
	//genere nombre, usuario y mail.

	$.ajax({
          url: "https://jsonplaceholder.typicode.com/posts/1/comments",
          type: "get",
 		}).done(function(mensaje){
 			console.log(mensaje[1].name)
 			$.each(mensaje, function(key,value){
 				var node = `<li data-id="${value.postId}" id="${value.id}""><h3>${value.name}</h3><h5>${value.email}</h5><p>${value.body}</p></li>`
 				$("#mensajes").append(node)
 			})
 				})
 			
 


