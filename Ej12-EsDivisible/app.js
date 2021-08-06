"use strict"

var n = parseInt(prompt("Escribe un numero y te dire si es divisible\n entre 2, 3, 5 o 7:"));

if(n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0){
    document.write("El numero " + n + " si es divisible entre 2, 3, 5 o 7");
}
else{
    document.write("El numero " + n + " no es divisible entre 2, 3, 5 o 7");
}