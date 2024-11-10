function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  // Recorremos el arreglo con for...in, accediendo a las claves de los usuarios
  for (const key in objetoMuchosUsuarios) {
    objetoMuchosUsuarios[key].esPremium = true;
  }

  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;
