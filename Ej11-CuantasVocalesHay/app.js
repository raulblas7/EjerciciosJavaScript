"use strict"

var s = prompt("Escribe una cadena de texto y te dire cuantas vocales hay:");

var suma = 0;

var resultadoA = s.match(/a/gi);
suma += resultadoA.length;

var resultadoE = s.match(/e/gi);
suma += resultadoE.length;

var resultadoI = s.match(/i/gi);
suma += resultadoI.length;

var resultadoO = s.match(/o/gi);
suma += resultadoO.length;

var resultadoU = s.match(/u/gi);
suma += resultadoU.length;

document.write("Hay " + suma + " vocales");