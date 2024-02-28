/*
  # PROBLEMA: Validador de contraseñas
  Crear una función llamada 'validarContrasena' que tome una cadena como argumento y verifique si cumple con los
  siguientes criterios:
  - Al menos 8 caracteres
  - Contiene al menos una latra mayúscula y una letra minúscula.
  - Contiene al menos un número.
  - La función debe devolver 'true' si la contraseña es valida y 'false' si no lo es.
  
  Ejemplo de uso: validarContrasena("Abcd1234") deberia devolver 'true'.s

  # SOLUCIÓN
*/

function validarContrasena(password){
  const REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
  //+ ^           -> Indica el inicio de la cadena
  //+ (?=.*[A-Z]) -> assertion: La cadena debe contener al menos una letra mayúscula
  //+ (?=.*[a-z]) -> assertion: La cadena debe contener al menos una letra minúscula
  //+ (?=.*\d).   -> assertion: La cadena debe contener al menus un digito
  //+ .+          -> Busca uno o más caracteres de cualquier tipo
  //+ $           -> Indica el fin de la cadena

  if (password.length < 8) {
    return false;
  } else {
    return REGEX.test(password) ? true : false;
  }
}

console.log(validarContrasena("Abc"));
console.log(validarContrasena("abcdefghi"));
console.log(validarContrasena("12345678")); 
console.log(validarContrasena("ABCDEFGH"));
console.log(validarContrasena("AbcD1234"));

/*
 # MAS INFO...
 ? https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions
 ? https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions/Assertions
*/