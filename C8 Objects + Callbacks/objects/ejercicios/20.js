function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  let cantLikes = 0;

  // Iteramos sobre el arreglo posts del objetoUsuario
  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    // Sumamos los likes de cada post
    cantLikes += objetoUsuario.posts[i].likes;
  }

  return cantLikes;
}

module.exports = sumarLikesDeUsuario;
