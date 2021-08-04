"use strict"

/* prompt es un cuadro de texto resaltante en el cual se puede escribir
** si se le da a aceptar devuelve el valor escrito, si se le da a cancelar
** se devuelve null. El primer parametro es el mensaje que muestra el cuadro,
** el segundo es el texto que sale por defecto en la zona de escribir
*/
var userName = prompt("Escriba su nombre:", "Ejemplo: Pepito Perez");

console.log("Hola " + userName);
document.write("Hola " + userName);