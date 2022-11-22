//Ejercicio: para encontrar numeros pares e impares
let numero = 12;
if(numero %2 == 0){
    console.log("Es un numero Par")
} else{
    console.log("Es un numero impar")
}

//Ejercicio: es mayor de edad
let edad = 16, mayor = 18;
if(edad >= mayor){
    console.log("Es mayor de edad")
} else{
    console.log("Es menor de edad")
}

//Ejercicio: Dentro de un rango
let valor = 9, valMin = 0, valMax = 10;
if(valor >= valMin && valor <= valMax){
    console.log("El valor esta dentro del rango")
} else{
    console.log("El valor esta fuera de rango")
}

//Ejercicio: El padre puede o no asistir al juego de su hijo
let vacaciones = true, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego de su hijo")
} else{
    console.log("El padre no puede asistir al juego del hijo")
}

//Operador ternario
let resultado2 = 3 > 2 ? "verdadero" : "falso"
console.log(resultado2)

let numero2 = 9;
resultado2 = numero2 % 2 == 0 ? "es un numero par" : "es un numero impar";
console.log(resultado2)

//Convertir String a Number
let miNumero = "16";
console.log(typeof miNumero);
let edad2 = Number(miNumero);
console.log(edad2);

//Funcion isNaN
if(isNaN(edad2)){ //is Not a Number (devuelve un resultado booleano)
    console.log("esta variable no contiene solo numeros")
}else{
    if(edad2 >= 16){
        console.log("Puede votar");
    } else{
        console.log("No puede votar");
    }
}


let resultado3 = edad2 >= 18 ? "Puede votar" : "No puede votar";
 console.log(resultado3);