/* Variables t elementos Booleanos */

var verdadero = true;
var falso = false;

/* Elementos de Comparación */

/* igualdad (==) */

console.log('Cuando es 1 == 1 es: ' + (1 == 1));

console.log('Cuando es "1" == 1 es: ' + ("1" == 1));

console.log('Cuando es 0 == false es: ' + (0 == false));

console.log('cuando es 1 == true es: ' + (1 == true));

console.log('Cuando es "" == 0' + ("" == 0)); // Convierte "" a 0

console.log('Cuando es 0 == ""' + (0 == "")); // Convierte "" a 0

console.log('CUando es "     " == 0' + (0 == "     "));

var x = {};

var y = x;

console.log("La Comparación entre los objetos X y Y es: " + (x > y));


if(x < y){
	

	
} else {
	minutes = minutes.toString(); // convertir la variable `minutes` en un string o cadena de caracteres
}

if(hours < 10){
	hours = "0" + hours;
} else {
	hours = hours.toString();
}

alert("el tipo de dato de lo minutos y los segundos es: " + typeof(minutes) + " "+ typeof(hours));

time = Number(hours + minutes);


alert("La variable `time` convertida a un valor numerico es: " + time);

if(time >= 0000 && time < 1200){
	alert("Buenos días");
} else if(time >= 1200 && time < 1700){
	alert("Buenas tardes");
} else if(time >=1700 && time < 2359){
	alert("Buenas noches");
}