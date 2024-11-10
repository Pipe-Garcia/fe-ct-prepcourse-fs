function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   // Convertimos ambos strings a minúsculas y eliminamos espacios
   // toLowerCase(): Convierte todos los caracteres de ambos strings a minúsculas, para que A y a sean tratados de la misma forma.
   // replace(/\s+/g, ''): Elimina todos los espacios en blanco de los strings (con una expresión regular).
   let normalizado1 = str1.toLowerCase().replace(/\s+/g, ''); // '/ /' arranca una expresion regular --- '\s+' Coincide con cualquier cantidad de espacios en blanco consecutivos --- 'g' Asegura que busque y elimine todos los conjuntos de espacios en el string, no solo el primero. --- replace(): Reemplaza los espacios encontrados por una cadena vacía (''), eliminando efectivamente los espacios.
   let normalizado2 = str2.toLowerCase().replace(/\s+/g, '');

   // Si tienen diferente longitud, no pueden ser anagramas
   if (normalizado1.length !== normalizado2.length) {
      return false;
   }

   // Ordenamos las letras de ambos strings
   // split(''): Convierte el string en un array de letras.
   // sort(): Ordena las letras en orden alfabético.
   // join(''): Convierte el array de letras de nuevo en un string.
   let letras1 = normalizado1.split('').sort().join('');
   let letras2 = normalizado2.split('').sort().join('');

   // Comparamos las letras ordenadas.
   // Si son iguales, son anagramas; si no, no lo son.
   return letras1 === letras2;
}

module.exports = esAnagrama;
