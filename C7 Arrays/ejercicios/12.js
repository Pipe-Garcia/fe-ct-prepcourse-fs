function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  
  var nuevoArray = [];

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === 'string') {
      nuevoArray.push(array[index].toUpperCase());
    }
  }

  return nuevoArray;
}

module.exports = convertirStringAMayusculas;
