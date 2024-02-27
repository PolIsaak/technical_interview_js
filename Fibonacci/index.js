/*
  # PROBLEMA: Fibonacci
  Escribe una función llamada generarFibonacci que tome un número como parámetro y 
  devuelva un array con los primeros N números de la secuencia de Fibonacci. 
  La secuencia comienza con 0 y 1, y cada número siguiente es la suma de los dos anteriores.

  Por ejemplo, si la entrada es 5, la función debería devolver el array [0, 1, 1, 2, 3], 
  que son los primeros 5 números de la secuencia de Fibonacci.

  # SOLUCIÓN
*/
function calcularFibonacci(n){
  let serieFib = [0, 1];
  if (n == 0) {
    return serieFib = [0];
  }else if(n == 1 ){
    return serieFib = [0, 1];
  }else{
    for (let i = 2; i < n; i++) {
      serieFib.push(serieFib[i-1] + serieFib[i-2]);
    }
    return serieFib;
  }
}

console.log(calcularFibonacci(13));
console.log(calcularFibonacci(0));
console.log(calcularFibonacci(1));
/*
  # MÁS INFORMACIÓN...
  ? https://quantdare.com/numeros-de-fibonacci/
*/