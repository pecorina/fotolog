function agregaPosteo() {
//contenedor-posteos, nombre y comentario del usuario.
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;

//cramos nodo elemento donde ira nuestro post
var nuevoPost = document.createElement("div");

//cramos elementos donde guardaremos los valores
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");

//creamos elemento para corazon
var parrafCorazon = document.creamos('p');
var i = document.createElement('i');

//asignamos padre a icono corazon 
parrafCorazon.appendChild(i);

//damos atributos a corazon
parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

//transformaremos el nombre a nodo texto
var nodoNombre = document.createTextNode(nombreFF + " escribió:");
var nodoPosteo = document.createTextNode(contenidoFF);

//asignaremos padres a nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//ahora asignamos padres a nombre y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

//creamos funcion click para el corazon y le asignamos la clase rojo de css
i.addEventListener("click", function(){
	i.classList.toggle('rojo');
});
//finalmente le damos atributos a nuestro post y lo agregamos a nuestro contenedor-posteos
nuevoPost.setAttribute("class", "posteo");
containerPosteos.appendChild(nuevoPost);

//para resetear los campos y dejarlos nuevamente en blanco
document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";
}