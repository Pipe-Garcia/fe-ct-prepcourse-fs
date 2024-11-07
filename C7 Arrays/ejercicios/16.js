function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let arrayResultante = [];

  for (let index = 0; index < array.length; index++) {
    arrayResultante.push(array[index] * index)
  }

  return arrayResultante;
}

module.exports = multiplicarElementosPorIndice;
