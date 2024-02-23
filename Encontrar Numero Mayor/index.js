/*
# PROBLEMA 4: Encontrar el número mayor
Escribe una función llamada 'encontrarMayor' que reciba un array de números y devuelva el número más grande en ese array

# SOLUCIÓN 1
- Se usa una funcion predefinida de JavaScript
*/
const arr = [8, 4, 5, 1, 7, 9, 3, 0, 2, 6, 12];

function encontrarMayor(arr){
  console.log("Math.max: ", Math.max(...arr));
}

encontrarMayor(arr);

/*
# SOLUCIÓN 2
? Esta solución no hace uso de funciones predefinidas de JavaScript
*/
function encontrarMayorRefactor(arr){
  let larger = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > larger){
      larger = arr[i];
    }
  }

  return larger;
}

console.log("Sin funciones predeterminadas: ", encontrarMayorRefactor(arr));

/*
# NOTAS:
  Ten en cuenta que algunos entrevistadores pueden estar más interesados en ver cómo abordas 
  el problema sin depender de funciones predefinidas de JavaScript, como Math.max. 
  Dependiendo del contexto de la entrevista, podrían estar buscando que implementes 
  tu propia lógica para encontrar el número más grande.

# PREGUNTAS
- ¿Puedo utilizar funciones predefinidas de JavaScript para resolver este problema?
- ¿Hay algún requisito adicional que deba tener en cuenta al abordar este problema?

# MAS INFORMACIÓN...
? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/