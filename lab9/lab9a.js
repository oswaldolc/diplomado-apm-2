/* Callbacks en JavaScript */

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/

// Creación del Callback
function operaciones(suma)
{
	suma(3,4,5);

}

operaciones(function(a,b,c){
	alert(a+b-c)
})
