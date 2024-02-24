/*
# PROBLEMA 1: Suma de números pares
  Escribe una función llamada 'validarParentesis' que reciban una cadena que contiene
  solo los caracteres '(', ')', '{', '}', '[', ']', y determine si la cadena de paréntesis
  es válida. Una cadena de paréntesis es válida si los parentesis están cerrados
  en el orden correcto.

# SOLUCIÓN 1
*/
function validarParentesis(str){
  let openChars = ['(', '{', '['];
  let closeChars = [')', '}', ']'];
  let temporalStorage = [];

  for (let i = 0; i < str.length; i++) {
    if (openChars.includes(str[i])) {
      temporalStorage.push(str[i]);
    }else if(closeChars.includes(str[i])){

      //+ RAZONAMIENTO - Comparativa de Apertura y Cierre de caracteres
      if (temporalStorage.length === 0) { 
        return false;
      }else{
        const indexOfOpen = openChars.indexOf(temporalStorage[temporalStorage.pop()]);
        const indexOfClose = closeChars.indexOf(str[i]);

        if (indexOfOpen !== indexOfClose) {
          return false;
        }
      }
    }
  }

  return temporalStorage.length === 0;
}

console.log(validarParentesis("([{}])")); //true
console.log(validarParentesis("]"));      //false
console.log(validarParentesis("()]"));    //false
console.log(validarParentesis("("));      //false
console.log(validarParentesis("(]"));     //false

/*
  + RAZONAMIENTO - Comparativa de Apertura y Cierre de caracteres
  - El indice 0, 1 y 2 de cada array de caracteres es su respectiva apertura o cierre
  - Obtener el índice del ultimo caracter en el storage temporal
  - Obtener el índice del caracter leido
  - Comparar indices, igual retornar true, diferente retornar false

  # MAS INFO...
  ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  ? https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/
  ? https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/
*/
