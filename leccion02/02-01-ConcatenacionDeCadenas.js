var nombre = 'Jose';
var apellido = 'Montes';

var nombreCompleto = nombre+' '+apellido; //Primera concatenacion
console.log(nombreCompleto);

var nombreCompleto2 = 'Facundo'+' '+'Rojas'; //Primera concatenacion
console.log(nombreCompleto2);

var juntos = nombre + 123; //Lee de izq a der siguiendo la cadena, lee el numero como tipo string
console.log(juntos);
juntos = nombre + 78 + 17;
console.log(juntos);
juntos = 78 + 17 + nombre; //Lee de izq a der realiza la operacion suma, luego lee el numero como string y lo concatena
console.log(juntos);

nombre += apellido; // Concatenacion utilizando operador simplificado
console.log(nombre);
nombre = 'Jose';

// Hoy ya no se usa var, se utiliza let y const
let nombre2 = "Pedro";
console.log(nombre2);

const apellido2 = "Lopez";
//apellido2 = "peres"; una constante no puede ser modificada
console.log(apellido2)

let x,y; // Se pueden crear varias variables dentro de una misma linea
x = 17, y = 21; // Se puede hacer asignacion de varias variables dentro de la misma linea
let z = x + y; // Se asigna el valor de la operacion
console.log(z);

//let 1num = 31; Las variables no pueden comenzar con un numero
//let break = "abc"; Tampoco pueden ser nombradas con palabras reservadas

let _1num = 31;
let rompiendo = "rompe"

console.log(_1num);
console.log(rompiendo);
