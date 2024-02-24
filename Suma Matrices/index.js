/*
# PROBLEMA 10: Suma de Matrices
  Escribe una función llamada 'sumaMatrices' que reciba dos matrices bidimensionales y devuelva
  una nueva matriz que sea el resultado de sumar las dos matrices de entrada. 

# SOLUCIÓN
*/
const matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matriz2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

function sumarMatrices(matriz1, matriz2){
  let matrizSumada = [[],[],[]];
  for (let i = 0; i < matriz1.length; i++) {  //This loop is for outer array
    for (let j = 0; j < matriz2[i].length; j++) {   //This loop is for inner array
      matrizSumada[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }

  return matrizSumada; 
}

console.log(sumarMatrices(matriz1, matriz2));

/*
  # MAS INFO...
  ? https://www.geeksforgeeks.org/javascript-multidimensional-array/
  ? https://es.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:adding-and-subtracting-matrices/a/adding-and-subtracting-matrices
  ? https://es.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:properties-of-matrix-addition-and-scalar-multiplication/a/properties-of-matrix-addition
*/