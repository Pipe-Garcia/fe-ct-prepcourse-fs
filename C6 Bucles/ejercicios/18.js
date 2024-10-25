function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  // Determina el menor y mayor valor
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  
  // Inicializa el producto en 1
  let producto = 1;
  
  // Recorre los números entre min y max, inclusive
  for (let i = min; i <= max; i++) {
    producto *= i;  // Multiplica cada número por el producto acumulado
  }

  return producto === 0 ? 0 : producto;
}

module.exports = productoEntreNúmeros;