/*
# PROBLEMA 11: Generador de Contraseñas
  Escribe una función llamada 'generarContraseña' que reciba un número 'n' y devuelva una cadena 
  de longitud 'n' que consesta en caracteres aleatorios. Puedes utilizar cualquier conjunto de
  caracteres que desees.

# SOLUCIÓN
- Usando una selección de conjunto de caracteres
*/
function generarContrasena(n){
  let password = "";
  let characters = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    [",", ";", ".", ":", "-", "_", "{", "[", "}", "]", "+", "*", "~", "^", "@", "|", "°", "!", "#", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "¡", "<", ">"]
  ]

  for (let i = 0; i < n; i++) {
    // Select set of characters
    let setSelected = Math.floor(Math.random() * (4 - 0) - 0);
    let characterSelected = Math.floor(Math.random() * (characters[setSelected].length - 0));

    password += characters[setSelected][characterSelected];
  }

  return password;
}

console.log("CONTRASEÑA: ", generarContrasena(10));

/*
# SOLUCIÓN 2
- Simplificación de los conjuntos de caracteres.
*/
function generarContrasenaSimplified(n) {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,;.:_-{}[]+*~^@|°!#$%&/()=?¿¡<>";

  let password = "";
  for (let i = 0; i < n; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    password += caracteres[indice];
  }

  return password;
}

console.log("CONTRASEÑA: ", generarContrasenaSimplified(10));

/*
  # MAS INFO...
  ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/