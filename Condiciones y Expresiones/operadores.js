/*Operador
Es un signo que especifica que debe efectuar una determinada operación.

Aritméticos (+,-,*,/,%,++,--)
De Aginación (=)
Lógicos (&&, ||, |)
De comparación (==, ===, !=, !==. <, >, >=, <=)
De cadena (toLowerCase, toUppeCase, trim, toString, concat, +)

ARITMÉTICOS

(+) Suma - Se utuliza para sumar dos números.
(-) Resta - Para restar de un número de otro.
(*) Multiplicación - Para multiplicar dos números.
(/) División - Para dividir un número entre otro
(%)
(++)
(--)
*/
let número1=10;
let número2=8;

suma = número1 + número2;
resta = número1 - número2;
multiplicación = número1 * número2;
división = número1 / número2;
residuo = número1 % número2;
incremento = número1;
incremento ++;
decremento = número2;
decremento --;

console.log(suma);
console.log(resta);
console.log(multiplicación);
console.log(división);
console.log(residuo);
console.log(incremento);
console.log(decremento);

let precioReal = 1000;
let porcentajeDescuento = 20;

let CantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento = precioReal - CantidadDescuento;

console.log("Precio Real: $" + precioReal);
console.log("Porcentaje de descuento: $" + porcentajeDescuento + "%");
console.log("Cantidad de descuento: $" + CantidadDescuento);
console.log("Precio con descuento: $" + precioConDescuento);

/*OPERADORES DE ASIGNACIÓN

(=) No compara, lo que hace es asingar. 

let frutas = manzana;

OPERADORES DE COMPARACIÓN

(==) Ogualdad compara si nuestros valores son iguales.*/

let número3 = 10;
let texto = "10";

console.log(número3==texto);

/*(===) Igualdad estricta, compara si los valores son iguales y el tipo de dato*/

let número4 = 10;
let texto1 = "10";

console.log(número4===texto1);

/*(!=) Desigualdad o destino. Este verifica si dos valores no son iguales y de ser necesario realiza la conversión*/

let precioCaja = 1499;
let precioMax = 1500;

if (precioCaja != precioMax) {
    console.log("El precio del producto no es igual al precio máximo");
} else {
    console.log("El precio del producto es igual al precio máximo permitido");
}

let número5 = 10;
let número6 = "10";

if (número5 != Number(número6)) {
    console.log("Son diferentes");
} else {
    console.log("Los valores son iguales");
}

/* (!==) Desigualdad Estricta. Verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el m

/*(!=) Desigualdad o destino. Este verifica si dos valores no son iguales y de ser necesario realiza la conversión*/

let precioCaja = 1499;
let precioMax = 1500;

if (precioCaja != precioMax) {
    console.log("El precio del producto no es igual al precio máximo");
} else {
    console.log("El precio del producto es igual al precio máximo permitido");
}

let número5 = 10;
let número6 = "10";

if (número5 != Number(número6)) {
    console.log("Son diferentes");
} else {
    console.log("Los valores son iguales");
}

/* (!==) Desigualdad Estricta. Verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mmismo tipo y valor*/

let número7 = 41;
let número8 = "50";

if (número7 !== número8) {
    console.log("Los valores son diferentes");
} else {
    console.log("Los valores son iguales");
}

/*(>)Mayor que, nos indica si un valor es mayor que otro.*/

let puntuaciónFinal = 85;
let puntuaciónRequerida = 102;

console.log(puntuaciónFinal > puntuaciónRequerida);

//(<) Menor que, indica si un valor es menor que otro//

let años = 20;
let edadLimite = 30;

console.log(años < edadLimite);

//(<=) Mayor o igual que, nos indica si un valor es igual o mayor a otro.//

