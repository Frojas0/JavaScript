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
