function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:

   // Usamos el método sort para ordenar la lista
  return list.sort((obj1, obj2) => {
   // Comparamos los valores de la propiedad especificada por sortBy
   if (obj1[sortBy] > obj2[sortBy]) {
     return -1;  // Si el primero es mayor, lo ponemos antes
   } else if (obj1[sortBy] < obj2[sortBy]) {
     return 1;  // Si el segundo es mayor, lo ponemos después
   } else {
     return 0;  // Si son iguales, no cambiamos el orden
   }
 });
}

module.exports = sort;
