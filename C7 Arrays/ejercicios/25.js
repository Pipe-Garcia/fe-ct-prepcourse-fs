function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let contadorPares = 0;

  for (let index = 0; index < numeros.length; index++) {
    if (numeros.length === 0 || typeof numeros[index] !== 'number') {
      return 0;
    }
    if (numeros[index] % 2 !== 0) {
      continue;
    }
    contadorPares++;
  }

  return contadorPares;

}

module.exports = contarParesConContinue;
