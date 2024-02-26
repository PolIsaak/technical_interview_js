/*
  # PROBLEMA 12: Buscar Palabra en Matriz
    Escribe una función llamada 'buscarPalabra' que reciba una matriz de letras(array de arrays)
    y una palabra, y determine si la palabra se encuentra en la matriz. 
    La palabra puede estar dispuesta horizontal o vertical

  # SOLUCIÓN 01
*/
const matrizCaracteres = [
  ["R", "V", "N", "O", "M"],
  ["I", "N", "D", "I", "A"],
  ["E", "R", "O", "M", "A"],
  ["L", "P", "I", "R", "T"],
  ["H", "V", "R", "E", "S"],
];

function buscarPalabra(matriz, palabra) {
  //Iterar sobre la matriz
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      
      if (matriz[i][j] === palabra[0]) {
        const coordenadasInicio = {"fila": i, "columna": j};

        //Función para buscar la palabra a partir de las coordenadas
        const buscarDesdeCoordenadas = (filaIncremento, columnaIncremento) => {
          let iterador = 1;

          while(iterador < palabra.length){
            const nuevaFila = coordenadasInicio.fila + filaIncremento * iterador;
            const nuevaColumna = coordenadasInicio.columna + columnaIncremento * iterador;

            if (nuevaFila >= 0 && nuevaFila < matriz.length && nuevaColumna > 0 && nuevaColumna < matriz[i].length) {
              //Verificamos si el caracter de la coordenada incrementada coincide
              if (matriz[nuevaFila][nuevaColumna] === palabra[iterador]) {
                iterador++;
              }else{
                break;
              }
            } else {
              break;
            }
          }

          // Validamos si encontramos toda la palabra
          if (iterador === palabra.length) {
            return true;
          }else{
            return false;
          }
        };

        // Buscamos la palabra en diferentes direcciones
        if(buscarDesdeCoordenadas(0, 1) || buscarDesdeCoordenadas(1, 0) || buscarDesdeCoordenadas(1, 1)) {
          return true;
        }
      }
    }    
  }
  return false;
}

console.log(buscarPalabra(matrizCaracteres, "ROMA"));
console.log(buscarPalabra(matrizCaracteres, "RES"));
console.log(buscarPalabra(matrizCaracteres, "RIEL"));
console.log(buscarPalabra(matrizCaracteres, "INDIA"));
console.log(buscarPalabra(matrizCaracteres, "POLAR"));

/*
  + RAZONAMIENTO - Titulo de Razonamiento
  - Coordenadas de la Matriz
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4] 
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4]
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4]
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4]
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]
  - Obtener el primer caracter de la palabra a encontrar
  - Recorrer la matriz
  - Validar si el valor de la coordenada coincide con el caracter que se esta buscando
    - Si el caracter coincide con el de la matriz se deberán guardar las coordenadas en un objeto
    - Crear una función para recorrer la matriz desde las coordenadas guardadas
  - Si la palabra no se encuentra se retornara false.

  # NOTA:
  ? Lista de palabras en matriz:
  - ROMA
  - RIEL
  - RES
  - INDIA
*/