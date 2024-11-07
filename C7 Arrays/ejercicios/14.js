function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Verificamos que sean números y que sean mayores a 10.
  let mayorA10 = 0;

  for (let index = 0; index < array.length; index++) {
    // Verificamos si el elemento es un número y si es mayor a 10
    if (typeof array[index] === 'number' && array[index] > 10) {
      mayorA10++;
    }
  }

  return mayorA10;

  // Alternativa con filter()
  // return array.filter(num => typeof num === 'number' && num > 10).length;
}

module.exports = contarElementosMayoresA10;
