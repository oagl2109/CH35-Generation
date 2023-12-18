//ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro//
// Solicitar al usuario dos números
const numero1 = (prompt("Ingrese el primer número:"));
const numero2 = (prompt("Ingrese el segundo número:"));

// Verificar si los números son iguales o si alguno es mayor que el otro
if (numero1 === numero2) {
  console.log("Los números son iguales.");
} else if (numero1 > numero2) {
  console.log(`El primer número (${numero1}) es mayor que el segundo número (${numero2}).`);
} else {
  console.log(`El segundo número (${numero2}) es mayor que el primer número (${numero1}).`);
}
//ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no//

// Solicitar al usuario dos palabras
const palabra1 = prompt("Ingrese la primera palabra:");
const palabra2 = prompt("Ingrese la segunda palabra:");

// Verificar si las palabras son iguales o no
if (palabra1 === palabra2) {
  console.log("Las palabras son iguales.");
} else {
  console.log("Las palabras son diferentes.");
}

//HOTCAKES//
let tieneHarina = true;
let tieneHuevos = true;
let tieneMantequilla = true;
let tieneNutella = true;
let tieneLeche = true;
let siHay = false;

if (tieneHarina && tieneHuevos && tieneMantequilla && tieneNutella && tieneLeche) {
  alert("¡Puedes hacer Hotcakes!");
  siHay = true;
  // Puedes agregar más condiciones o lógica aquí según sea necesario
} else {
  alert("No puedes hacer Hotcakes. Necesitas todos los ingredientes.");
}


if (siHay == true) {
    alert("¡Genial! Tienes todos los ingredientes para hacer hotcakes.");
    alert("Comienza mezclando la harina, los huevos y la leche, luego añade la mantequilla derretida.");
    alert("Calienta un sartén y vierte un poco de la mezcla para hacer los hotcakes.");
    alert("Hotcakes listos, ¡a disfrutar!");
  } else {
        alert("Tssss, t faltan ingredientes para hacer hotcakes.");
        alert("No es posible hacer hotcakes sin todos los ingredientes.");
        alert("Ve a conseguirlos, CORREEEE");
  }