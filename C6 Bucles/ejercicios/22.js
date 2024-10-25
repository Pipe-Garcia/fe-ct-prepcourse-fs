function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  let count = 0; // Inicializa un contador
  do {
    num += 5; // Aumenta num en 5
    count++;   // Incrementa el contador
  } while (count < 8); // Continua hasta que el contador llegue a 8

  return num; // Retorna el valor final
}

module.exports = doWhile;