// Tipos de datos en JavaScript

//Tipo String
var nombre = 'Facundo';
console.log(nombre);

//Tipo Number
var numero = 3000;
console.log(numero);

//Tipo Object
var objeto ={
    nombre : 'Facundo',
    apellido : 'Rojas',
    telefono : '123321321'
}
console.log(objeto);

//Tipo Boolean
var bandera = true;
console.log(bandera);

//Tipo Function
//funcion nos permite reutilizar lineas de codigo
function miFuncion(){}
console.log(miFuncion);

//Tipo Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

//Tipo Class
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//Tipo de dato undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

// null: significa ausencia de valor
var y = null; // null no es un tipo de dato, pero su origen es object
console.log(typeof y);

//Tipo de dato array y Empty String
var autos = ['Citroen', 'Audi', 'BMW', 'Ford'];
console.log(autos);
console.log(typeof autos); // preguntamos que tipom de dato es:

var z = '';
console.log(z); // esto se se refiere a que esto es una cadena vacia:
console.log(typeof z);