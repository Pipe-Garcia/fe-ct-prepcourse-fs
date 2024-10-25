function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  // Verifica si el número es menor o igual a 1
  if (numero <= 1) {
    return false; // No es primo
  }
  
  // Verifica si el número es 2
  if (numero === 2) {
    return true; // 2 es primo
  }
  
  // Verifica si el número es par (y mayor que 2)
  if (numero % 2 === 0) {
    return false; // No es primo
  }
  
  // Comprueba los divisores desde 3 hasta la raíz cuadrada de "numero"
  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) {
      return false; // No es primo
    }
  }
  
  return true; // Si no se encontró ningún divisor, es primo
}

module.exports = esNumeroPrimo;
