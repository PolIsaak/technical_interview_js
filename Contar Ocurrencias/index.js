/*
# PROBLEMA 8: Contar Ocurrencias
  Escribe una función llamada 'contarOcurrencias' que recibe un array de números
  y devuelva un objeto que contenga la cantidad de veces que cada número aparece
  en el array.

# SOLUCIÓN
*/
const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 1, 3, 1];

function contarOcurrencias(arr){
  let ocurrencies = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in ocurrencies) {
      ocurrencies[arr[i]] += 1;
    }else{
      ocurrencies[arr[i]] = 1;
    }
  }

  return ocurrencies;
}


console.log(contarOcurrencias(arr));
/*
  + RAZONAMIENTO - 
  - Declarar el objeto de ocurrencias.
  - Recorrer el array y añadir una ocurrencia a la lista si esta vacia.
  - 

  # MÁS INFO...
  ? https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects
  ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
*/