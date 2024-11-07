function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  
  // Crea un array vacío para almacenar los elementos duplicados
  var nuevoArray = [];
  
  // Recorre el array original
  for (let index = 0; index < array.length; index++) {
    // Multiplica cada elemento por 2 y lo agrega al nuevo array
    nuevoArray.push(array[index] * 2);
  }
  
  // Devuelve el nuevo array con los elementos duplicados
  return nuevoArray;
}

module.exports = duplicarElementos;
