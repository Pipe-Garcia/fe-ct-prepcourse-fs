function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  // Si el array está vacío, no hacemos nada
  if (array.length === 0) return array;

  // Verificamos si el primer elemento es un número o string
  if (typeof array[0] === 'number') {
    // Si son números, los ordenamos numéricamente
    return array.sort((a, b) => a - b);
  } else if (typeof array[0] === 'string') {
    // Si son strings, los ordenamos alfabéticamente con localeCompare
    return array.sort((a, b) => a.localeCompare(b));
  }
}

module.exports = ordenarArray;
