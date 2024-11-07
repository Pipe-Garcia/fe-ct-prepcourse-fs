function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  
  let indicePrimario = 0;

  for (let index = 1; index < array.length; index++) {
    // Si algún elemento es diferente al primero, retornamos false
    if (array[index] !== array[indicePrimario]) {
      return false;
    }
  }

  // Si el bucle termina y no se encontró ningún elemento distinto, retornamos true
  return true;
}

module.exports = todosIguales;
