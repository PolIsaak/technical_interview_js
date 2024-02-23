/*
? Problema 1: Suma de números pares

Escribe una función llamada 'sumaPares' que reciba un número entero positivo 'n'
y devuelva la suma de todos los números pares desde 1 hasta 'n'
*/

/*
* SOLUCIÓN 1
? Esta función itera sobre cada número y evalua si es un número par
*/
function sumaPares(n){
  let suma = 0;
  for (let index = 0; index <= n; index++) {
    if (index % 2 == 0) {
      suma += index;
    }
  }

  return suma;
}

console.log(sumaPares(10));

/*
* SOLUCIÓN 2
? Esta función itera solo sobre los números pares
*/
function sumaParesRefactorized(n){
  let suma = 0;
  for (let index = 0; index <= n; index+=2) {
    suma += index;
  }

  return suma;
}
console.log(sumaParesRefactorized(10));