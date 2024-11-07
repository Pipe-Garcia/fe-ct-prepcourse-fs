function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  let nuevoArray = [];

  // Recorremos el array completo
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'Enero' || array[index] === 'Marzo' || array[index] === 'Noviembre') {
      nuevoArray.push(array[index]);
    }
  }

  // Verificamos si encontramos los tres meses pedidos
  if (nuevoArray.includes('Enero') && nuevoArray.includes('Marzo') && nuevoArray.includes('Noviembre')) {
    return nuevoArray;
  } else {
    return 'No se encontraron los meses pedidos';
  }
}

module.exports = mesesDelAño;
