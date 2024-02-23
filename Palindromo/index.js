/*
? Problema 2: Palindromo

Escribe una función llamada 'esPalindromo' que recibe una cadena de texto y determine si es un palindromo o no.
Un palindromo es una palabra, frase, número o cualquier secuencia que se lee igual hacia adelante que hacia atrás, 
ignorando espacios y mayúsculas/minúsculas
*/

/*
* SOLUCIÓN 1
? Uso de sentencia if para la evaluación de las palabras
*/
function esPalindromo(str){
  const lowerRegStr = str.toLowerCase().replace(/ /g, '');
  const reversedStr = reverseStr(lowerRegStr);

  if(lowerRegStr == reversedStr){
    return true;
  }else{
    return false;
  }
}

function reverseStr(strToReverse){
  const splitedStr = strToReverse.split('');
  const reversedStr = splitedStr.reverse();
  return joinedStr = reversedStr.join('');
}

/*
* SOLUCIÓN 2
? Simplifica la función 'esPalindromo'
*/
function esPalindromoRefactorized(str){
  const lowerRegStr = str.toLowerCase().replace(/ /g, '');
  const reversedStr = reverseStr(lowerRegStr);
  return lowerRegStr === reverseStr;
}

function reverseStr(strToReverse){
  const splitedStr = strToReverse.split('');
  const reversedStr = splitedStr.reverse();
  return reversedStr.join('');
}

/*
* More info..
? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
? https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
? https://regex-generator.olafneumann.org/
*/