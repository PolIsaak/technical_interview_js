/* 
# PROBLEMA 6: Ordenar un Array de Cadenas
  Escribe una función llamada 'ordernarCadenas' que recibe un array de cadenas
  y lo ordene alfabéticamente de manera ascendente. La función debe devolver
  el array ordenado.

# SOLUCIÓN 1
- Usando funciones predefinidas de JavaScript .sort()
*/
const arr = ['manzana', 'kiwi', 'pera', 'banana'];
const len = arr.length;
//console.log(arr.sort());

/*
# SOLUCIÓN 2
- Sin usar funciones predefinidas de JavaScript - Bubble Sort
*/
function ordenarCadenas(arr){
  let temp;
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }

  return arr;
}

console.log(ordenarCadenas(arr));
/*
  # MAS INFO...
  ? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  ? https://www.geeksforgeeks.org/bubble-sort/
  ? https://www.freecodecamp.org/espanol/news/algoritmos-de-ordenacion-explicados-con-ejemplos-en-javascript-python-java-y-c/
*/
