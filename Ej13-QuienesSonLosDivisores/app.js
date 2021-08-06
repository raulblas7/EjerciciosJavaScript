"use strict"

var n = parseInt(prompt("Escribe un numero y te dire si es divisible\n entre 2, 3, 5 o 7:"));

var divisores = [ 2, 3, 5, 7];

var tam = divisores.length;

for(let i = 0; i < tam; i++){
    if(n % divisores[i] == 0){
        document.write("El numero " + n + " es divisible entre " + divisores[i] + ". ");
    }
}
