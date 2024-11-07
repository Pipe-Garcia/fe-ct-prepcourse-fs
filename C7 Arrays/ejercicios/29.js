function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) return null;

  for (let index = 0; index < numeros.length - 1; index++) {
    // Si el siguiente número no es consecutivo
    if (numeros[index + 1] !== numeros[index] + 1) {
      return numeros[index] + 1; // Retorna el número faltante
    }
  }

  // Si no falta ningún número, devolvemos null
  return null;
}

module.exports = encontrarNumeroFaltante;