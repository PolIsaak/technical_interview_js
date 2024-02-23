/*
? Problema 3: FizzBuzz

Escribir una función llamada 'fizzbuzz' que reciba un número entero 'n' y devuelve una lista de
números desde 1 hasta 'n'. Sin embargo, hay tres condiciones especiales.

- Si el número es divisible por 3, en lugar de imprimir el número, imprimir "Fizz".
- Si el número es divisible por 5, en lugar de imprimir el número, imprimir "Buzz".
- Si el número es divisible tanto por 3 como por 5, imprimir 'FizzBuzz'.

* SOLUCIÓN 
? 
*/
function fizzBuzz(n){
  for (let index = 1; index <= n; index++) {
    if (index % 15 === 0){
      console.log("FizzBuzz");
      continue;
    }else if(index % 3 === 0) {
      console.log("Fizz");
      continue;
    } else if(index % 5 === 0){
      console.log("Buzz");
      continue;
    }
    console.log(index);
  }
}

fizzBuzz(100);