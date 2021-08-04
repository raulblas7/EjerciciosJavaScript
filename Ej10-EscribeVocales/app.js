"use strict"

var s = prompt("Escriba una cadena de texto y escribire solo las vocales:");

// busca todas las iteraciones de la letra a y las almacena en un array gracias a la letra g
// la i es para que de igual si es mayuscula o minuscula
var resultadoA = s.match(/a/gi);
var total = resultadoA.length;
for(let i = 0; i < total; i++){
    document.write(resultadoA[i]);
}

var resultadoE = s.match(/e/gi);
total = resultadoE.length;
for(let i = 0; i < total; i++){
    document.write(resultadoE[i]);
}

var resultadoI = s.match(/i/gi);
total = resultadoI.length;
for(let i = 0; i < total; i++){
    document.write(resultadoI[i]);
}

var resultadoO = s.match(/o/gi);
total = resultadoO.length;
for(let i = 0; i < total; i++){
    document.write(resultadoO[i]);
}

var resultadoU = s.match(/u/gi);
total = resultadoU.length;
for(let i = 0; i < total; i++){
    document.write(resultadoU[i]);
}