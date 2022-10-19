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