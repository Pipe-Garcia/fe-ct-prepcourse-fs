function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var arrayPares = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      arrayPares.push(array[index]);
    }
  }

  return arrayPares;
}

module.exports = filtrarNumerosPares;
