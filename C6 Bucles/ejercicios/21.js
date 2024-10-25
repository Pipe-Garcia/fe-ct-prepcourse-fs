function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  
  // Si el número es menor que 1, no puede ser potencia de 2
  if (numero < 1) return false;

  // Mientras el número sea divisible por 2, seguimos dividiéndolo
  while (numero % 2 === 0) {
    numero = numero / 2;
  }

  // Si al final es 1, es potencia de 2, sino no lo es
  return numero === 1;
}

module.exports = esPotenciaDeDos;
