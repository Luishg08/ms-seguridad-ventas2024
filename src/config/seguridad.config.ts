export namespace ConfiguracionSeguridad {
  export const claveJWT = process.env.SECRET_PASSWORD_JWT;
  export const menuUsuarioId = "65d92459971b150fdc22502a";
  export const listarAccion = "listar"
  export const editarAccion = "editar"
  export const eliminarAccion = "eliminar"
  export const guardarAccion = "guardar"
  export const descargarAccion = "descargar"
  export const MongodbConnectionString = process.env.CONNECTION_STRING_MONGODB;
  export const RolUsuarioPublico = "661c0d0a9791eba7b4ff81a5"
}
