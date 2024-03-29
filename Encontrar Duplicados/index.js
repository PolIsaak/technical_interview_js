/*
# PROBLEMA 7: Encontrar Duplicados
  Escribe una función llamada 'encontrarDuplicados' que reciba un array de números
  y devuelva un nuevo array que contenga solo los números que aparecen más de una vez
  en el array original. El nuevo array de duplicados no debe contener duplicados.

# PROBLEMA 9: Eliminar Duplicados
  Escribe una función llamada 'eliminarDuplicados' que reciba un array de números
  y devuelva un nuevo array que contenga solo los números únicos, eliminando los duplicados

# SOLUCIÓN 1
- Usando arreglos unidimensionales
*/
const arr = [1, 2, 3, 4, 4, 4, 5, 6, 6, 7];
const arr2 = [10, 20, 30, 40, 50];

function dividirUnicosYDuplicados(arr, returnUniques = false){
  let uniqueValues = [];
  let duplicatedValues = [];
  // + RAZONAMIENTO - Uso de pilas para la separación de valores únicos y duplicados
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValues.includes(arr[i])) {
      uniqueValues.push(arr[i])
    }else if(!duplicatedValues.includes(arr[i])){
      duplicatedValues.push(arr[i]);
    }
  }

  return returnUniques ? uniqueValues : duplicatedValues;
}

console.log("únicos: ", dividirUnicosYDuplicados(arr, true));
console.log("duplicados: ", dividirUnicosYDuplicados(arr, false));

console.log("duplicados: ", dividirUnicosYDuplicados(arr2, true));
console.log("duplicados: ", dividirUnicosYDuplicados(arr2, false));
/*
  + RAZONAMIENTO - Uso de pilas para la separación de valores únicos y duplicados
  - Preguntamos si el valor actual esta incluido en el stack de valores únicos.
  - Si no lo esta significa que hasta el momento es un valore único.
  - Si ya se encuentra en el stack de valores únicos significa que es un valor duplicado.
  - Preguntamos si esta valor duplicado ya se encuentra en el stack de duplicados.
  - Si no lo esta, lo agregamos al stack, de lo contrario continuamos la iteración.

  + NOTA:
  - Funciones refactorizadas en base a lo que se pedia en ambas problematicas
  
  # MAS INFO...
  ? https://matiashernandez.dev/blog/post/4-formas-de-eliminar-elementos-duplicados-en-un-arreglo-con-javascript
  ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/