function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  // Crear un array vacío para almacenar los resultados
  let arrayResultante = [];

  // Iterar hasta 10 veces
  for (let index = 0; index < 10; index++) {
    // Aumentar el valor de num en 2 en cada iteración
    num += 2;

    // Si el valor de num coincide con el número de iteraciones, interrumpir
    if (num === index) {
      return 'Se interrumpió la ejecución';
    }

    // Guardar el nuevo valor en el array resultante
    arrayResultante.push(num);
  }

  // Si no se interrumpió, devolver el array con los resultados
  return arrayResultante;
}

module.exports = breakStatement;
