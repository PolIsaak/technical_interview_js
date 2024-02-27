/*
  # PROBLEMA 13: Máximo Producto de Dos Números
  DadaDada una matriz de números enteros, encuentra el máximo producto posible 
  al multiplicar dos números distintos de la matriz.

  Implementa una función llamada maximoProducto que tome como argumento una matriz 
  de números enteros y devuelva el máximo producto de dos números distintos de la matriz.

  ? CONSIDERACIONES
  - La matriz siempre contendrá al menos dos números enteros.
  - La matriz puede contener números negativos.
  - El producto máximo puede ser positivo o negativo.

  # SOLUCIÓN
*/
const arrayPos = [2, 4, 6, 8, 10];
const arrayNeg = [-3, -1, -5, -7, -9];
const arrayMix = [-5, 4, -1, 8, -9];
const arrayJustOne = [10]

function maximoProducto(arr){
  let firstMax, secondMax;
  // Validamos si el arreglo contiene al menos dos elementos
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        firstMax = arr[i];
      }else if(arr[i] > firstMax){
        secondMax = firstMax;
        firstMax = arr[i];
      }else if(secondMax === undefined || arr[i] > secondMax){
        secondMax = arr[i];
      }
    }

    // Retornamos el producto maximo
    return firstMax * secondMax;
  }else{
    return arr[0];
  }
}

console.log(maximoProducto(arrayJustOne));
console.log(maximoProducto(arrayPos));
console.log(maximoProducto(arrayNeg));
console.log(maximoProducto(arrayMix));

/*
 # NOTA:
 Si bien el enfoque actual de la solución funciona bien, hay otras formas de abordar el problema,
 como ordenar el arreglo de forma descendente y obtener los dos primeros valores del arreglo ordenado. 
 Sin embargo, la complejidad de ordenar la matiz seria mayor que O(n) (Complejidad Lineal).

 Si abordamos el problema mediante el ordenamiento, la complejidad temporal dependerá del algoritmo
 de ordenamiento utilizado. Con un algoritmo de ordenamiento rapido (quick sort) o algoritmo de mezcla
 (merge sort) la complejidad de tiempo promedio será de O(n log n).
*/