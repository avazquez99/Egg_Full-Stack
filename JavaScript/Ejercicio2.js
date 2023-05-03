////////// EJERCICIO 2 //////////

// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio 
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que 
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:

// area = PI * radio2 
// perimetro = 2 * PI * radio 

/////////////////////////////////

const PI = 3.141592653589793;

var radio = prompt("Indique el valor del radio de una circunferencia en metros");

let areaCirc = PI * radio**2;

let perimetroCirc = 2 * PI * radio;

console.log("El área de la circunferencia de radio " + radio + " es " + areaCirc + " m2");

console.log("El perímetro de la circunferencia de radio " + radio + " es " + perimetroCirc + " m");