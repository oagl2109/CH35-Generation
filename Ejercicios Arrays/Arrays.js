/*
*==Arrays==
*Es una coleccion o agrupacion de elementos en una misma variable, cada uno de ellos ubicado por la posicion que ocupa el array.
*Los arrays se utilizan para almacenar y organizar datos de manera mas eficiente.
[]*/

//*Crear un Array
const numeros = [1, 2, 3, 4, 5,];
//Array de cadena de texto
const comida = ["tacos", "sopa", "pan", "jugo"];
console.log(comida);

//*Array mixto
const mixto = [ 
    "pluma",
    8,
    true,
    { nombre:"Mar"}
];
console.log(mixto);

//*Array vacio.
const lista = [ ];
console.log(lista)

//*Agregar elementos a mi array vacio
lista[0] = "Leche";
lista[1] = "pollo";
lista[2] = "espinaca";
lista[3] = "huevo";
console.log(lista);

//*Otra manera de crear arrives
const frutas = new Array("manzana","mandarina","peras","uvas");

//*Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array.

console.log(frutas);

//*Longitud de un array este dice cuantos elementos hay en futas
console.log(frutas.length);

//*Acceder a los elementos del array, acorde a su indice
console.log(frutas[3]);//*llamamos uvas de acuerdo a su posicion
console.log(frutas[4]);//*undefined ya que se cuenta de cero

//*Modificar un elemento del array por el indice
const cremeria = ["jamon","salchicha","Queso","yogurt","crema"];
console.log(cremeria);
cremeria[2] = "Quesillo";
console.log(cremeria);
cremeria[4] = "danonino";
console.log(cremeria);

//*Arreglo de arreglos, multidimensional
console.log("Arreglo de arreglos");

//* Estados : EDOMEX, GDL, YUCATAN, SONORA, OAXACA, CDMX

//*Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayuda, tacos.


const estados = ["Estado de Mexico", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "CDMX"];

const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayuda", "Tacos"];

const menu = [estados, platillos];

console.log (menu[0][2]);

//*En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.

console.log(`En ${menu[0][1]} se come ${menu[1][1]}`);
/*MÉTODOS DE ARRAYS
*MÉTODO DE COLA (queue) Implican agregar elementos al final del array y eliminar elementos al inicio del array, sigue el principio de FIFO (First-in-first-out) lo que significa que el primer elemento añadido es el primero elemento eliminado.
*push
*shift
*unshift

*MÉTODO DE PILA (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (Last-in-Fisrt-Out) que significa el último elemento añadido es el primero en ser eliminado.
*
*push
*pop
*/
console.log ("Métodos de Arrays")

const CH35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
//*Pop () eliminar el último elemento del array
let popCH35 = CH35.pop();
console.log(popch35);//Devuelve el dato eliminado
console.log(CH35)//Elimina el dato de la lista

//Push() agregar al final del array.
let pushCH35 = CH35.push  ("Mony")
console.log(CH35);

//*Shift() quitar primero del array
let shiftCH35 = CH35.shift();
console.log(CH35);

//*Unshift agregar al principio del array
let unshiftCH35 = CH35.unshift ("Dany");
console.log(CH35);

//*Reverse () cambia el sentido del ordenamiento del array
let.reverseCH35 =CH35.reverse ();
console.log(CH35);

/*Investigar 
sort
ForEach
Slice
Splice
*/