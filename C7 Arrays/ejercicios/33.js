function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  let arrayResultante = [];

  let arrayPrimerString = str1.split('');
  let arraySegundoString = str2.split('');
  let arrayTercerString = str3.split('');

  // Encontrar la longitud máxima entre los tres strings
  let maxLength = Math.max(arrayPrimerString.length, arraySegundoString.length, arrayTercerString.length);

  // Recorremos hasta la longitud máxima
  for (let index = 0; index < maxLength; index++) {
    // Si hay un carácter en el índice actual en el primer string, lo añadimos
    if (arrayPrimerString[index] !== undefined) {
      arrayResultante.push(arrayPrimerString[index]);
    }
    // Si hay un carácter en el índice actual en el segundo string, lo añadimos
    if (arraySegundoString[index] !== undefined) {
      arrayResultante.push(arraySegundoString[index]);
    }
    // Si hay un carácter en el índice actual en el tercer string, lo añadimos
    if (arrayTercerString[index] !== undefined) {
      arrayResultante.push(arrayTercerString[index]);
    }
  }

  // Unimos el array en un string
  const combinacion = arrayResultante.join('');
  
  return combinacion;
}

module.exports = combine;