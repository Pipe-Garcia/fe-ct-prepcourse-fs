function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arrayResultante = [];

  for (let index = 0; index < arrayNumeros.length; index++) {
    arrayResultante.push(arrayNumeros[index] * 6);
  }

  return arrayResultante;
}

module.exports = tablaDelSeis;
