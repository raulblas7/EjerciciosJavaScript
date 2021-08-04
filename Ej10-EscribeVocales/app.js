"use strict"

var s = prompt("Escriba una cadena de texto y escribire solo las vocales:");

// busca todas las iteraciones de la letra a y las almacena en un array gracias a la letra g
// la i es para que de igual si es mayuscula o minuscula
function escribe(total, resultado){
    for(let i = 0; i < total; i++){
        document.write(resultado[i]);
    }
}

var resultadoA = s.match(/a/gi);
var total = resultadoA.length;
escribe(total, resultadoA);

var resultadoE = s.match(/e/gi);
total = resultadoE.length;
escribe(total, resultadoE);

var resultadoI = s.match(/i/gi);
total = resultadoI.length;
escribe(total, resultadoI);

var resultadoO = s.match(/o/gi);
total = resultadoO.length;
escribe(total, resultadoO);

var resultadoU = s.match(/u/gi);
total = resultadoU.length;
escribe(total, resultadoU);