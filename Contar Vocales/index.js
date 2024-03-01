/* 
Escribe una función llamada contarVocales que tome una cadena como parámetro y devuelva 
un objeto que cuente la cantidad de cada vocal (a, e, i, o, u) en esa cadena.
#NOTA: Contar como separado aeiou
*/

// Definimos un array con las vocales que queremos contar
const vocalesArray = ["a", "e", "i", "o", "u"];

// Definimos la función contarVocales que toma una cadena como parámetro
function contarVocales(str) {
    // Inicializamos un objeto para almacenar la cuenta de cada vocal
    let contadorVocales = {a:0, e:0, i:0, o:0, u:0};
    console.log("a" in contadorVocales);

    // Iteramos sobre cada caracter de la cadena
    for (let i = 0; i < str.length; i++) {
        // Convertimos el caracter a minúsculas para ser case-insensitive
        let char = str[i].toLowerCase();

        // Verificamos si el caracter actual es una vocal utilizando includes en el array vocalesArray
        if (vocalesArray.includes(char)) {
            // Si la vocal ya está en el objeto contadorVocales, incrementamos su contador
            if (contadorVocales[char]) {
                contadorVocales[char]++;
            } else {
                // Si la vocal no está en el objeto, la inicializamos con un contador de 1
                contadorVocales[char] = 1;
            }
        }
    }

    // Devolvemos el objeto que contiene la cuenta de cada vocal
    return contadorVocales;
}

// Llamamos a la función con una cadena de ejemplo
const resultado = contarVocales("Lorem ipson dolor et fit");

// Mostramos el resultado en la consola
console.log(resultado);

/* Problemas:
1.- 
*/