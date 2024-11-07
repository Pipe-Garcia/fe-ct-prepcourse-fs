function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  const vistos = new Set();  // Para almacenar los números que ya hemos visto

  // Usamos find() para encontrar el primer número repetido
  return numeros.find((num) => {
    if (vistos.has(num)) {
      return true;  // Si ya lo hemos visto, es el primer repetido
    }
    vistos.add(num);  // Si no, lo agregamos al conjunto
    return false;
  });
}

module.exports = encontrarElementoRepetido;