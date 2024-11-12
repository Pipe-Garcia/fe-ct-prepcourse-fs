function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:

   // Verifica si el callback es una función
   if (typeof callback === 'function') {
      // Si es una función, aplica el callback al string
      return callback(string);
   }
   // Si no es una función (o no se proporciona), devuelve el string original
   return string;
}

module.exports = cambiarCadena;
