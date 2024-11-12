function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   let nuevoArray = [];

   // Recorremos el array de strings
   for (let index = 0; index < arrayOfStrings.length; index++) {
   // Verificamos si el primer carácter del string es "a"
   if (arrayOfStrings[index][0] === "a") {
     // Si es así, agregamos el string al nuevo array
     nuevoArray.push(arrayOfStrings[index]);
      }
   }

 // Retornamos el nuevo array con los elementos que empiezan con "a"
 return nuevoArray;
}

module.exports = filter;
