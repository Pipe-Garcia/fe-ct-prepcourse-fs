function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  // Verificamos si la propiedad "email" tiene un valor válido
  if (objetoUsuario['email']) {
    return true;
  } else {
    return false;
  }
}

module.exports = tieneEmail;
