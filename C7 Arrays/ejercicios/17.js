function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let sumaArray = 0;

  for (let index = 0; index < arrayOfNums.length; index++) {
    sumaArray += arrayOfNums[index];
  }

  return sumaArray;
}

module.exports = agregarNumeros;
