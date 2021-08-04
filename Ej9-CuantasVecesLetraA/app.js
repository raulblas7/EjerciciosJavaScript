"use strict"

var s = prompt("Escriba una cadena de texto y le diré cuantas letras A hay:");

// busca todas las iteraciones de la letra a y las almacena en un array
// la i es para que de igual si es mayuscula o minuscula
var resultado = s.match(/a/gi).length;

document.write("Hay " + resultado + " letras A.");