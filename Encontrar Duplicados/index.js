/*
# PROBLEMA 7: Encontrar Duplicados
  Escribe una función llamada 'encontrarDuplicados' que reciba un array de números
  y devuelva un nuevo array que contenga solo los números que aparecen más de una vez
  en el array original. El nuevo array de duplicados no debe contener duplicados.

# SOLUCIÓN
*/
const arr = [1, 2, 3, 4, 4, 4, 5, 6, 6, 7];
let uniqueValues = [];
let duplicatedValues = [];

function encontrarDuplicados(arr){
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValues.includes(arr[i])) {
      uniqueValues.push(arr[i])
    }else if(duplicatedValues.includes(arr[i])){
      continue;
    }else{
      duplicatedValues.push(arr[i]);
    }
  }
  return duplicatedValues;
}

console.log(encontrarDuplicados(arr));

/*
 # MAS INFO...
 ? https://matiashernandez.dev/blog/post/4-formas-de-eliminar-elementos-duplicados-en-un-arreglo-con-javascript

*/