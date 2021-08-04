"use strict"

var n1 = parseInt(prompt("Escriba el primer numero:"));
var n2 = parseInt(prompt("Escriba el segundo numero:"));
var n3 = parseInt(prompt("Escriba el tercer numero:"));

if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.write("Algun numero es NaN");
}
else {
    if (n1 >= n2 && n1 >= n3) {
        document.write("El numero mayor es " + n1);
    }
    else if (n2 >= n1 && n2 >= n3) {
        document.write("El numero mayor es " + n2);
    }
    else if (n3 >= n2 && n3 >= n1) {
        document.write("El numero mayor es " + n3);
    }
}