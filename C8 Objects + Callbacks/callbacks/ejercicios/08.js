const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

   // Iteramos sobre el array
   for (let i = 0; i < array.length; i++) {
    // Usamos el callback para evaluar si el elemento cumple con la condición
    if (callback(array[i])) {
      return array[i];  // Si el elemento cumple la condición, lo retornamos
    }
  }
  // Si no encontramos ningún elemento que cumpla con la condición, retornamos el mensaje
  return 'No se encontró el elemento';
};

module.exports = buscarElemento;
