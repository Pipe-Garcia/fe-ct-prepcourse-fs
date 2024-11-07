function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.

  if (array.length === 0) return 0;  // Devuelve 0 si el array está vacío

  let indiceMayor = 0;  // Inicializamos el índice mayor en 0

  // Recorremos el array para encontrar el índice del mayor valor
  for (let index = 1; index < array.length; index++) {  // Empezamos desde 1, ya que compararemos con el primero
    if (array[index] > array[indiceMayor]) {
      indiceMayor = index;  // Actualizamos el índice si encontramos un número mayor
    }
  }

  return indiceMayor;  // Devolvemos el índice del número mayor
}

module.exports = encontrarIndiceMayor;
