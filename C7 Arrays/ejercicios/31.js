function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  let palabraSeparada = texto.split('');
  let palabraInvertida = palabraSeparada.reverse();
  let palabraArreglada = palabraInvertida.join('');

  return palabraArreglada;
}

module.exports = invertirTexto;
