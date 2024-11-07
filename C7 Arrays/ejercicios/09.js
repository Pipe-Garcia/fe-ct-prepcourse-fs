function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   // Genera un índice aleatorio entre 0 y la longitud del array - 1
   const indiceAleatorio = Math.floor(Math.random() * array.length);
   
   // Devuelve el elemento en ese índice
   return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
