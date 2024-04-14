export namespace ConfiguracionNotificaciones {
  export const asunto2fa = 'Código de verificación';
  export const asuntoVerificacionCorreo = 'Verificación de correo';
  export const asuntoClaveAsignada = 'Asignacion de clave';
  export const urlNotificaciones2fa: string = 'http://localhost:5041/Notificaciones/correo-2fa';
  export const urlValidarCorreo: string = 'http://localhost:5041/Notificaciones/correo-verificacion';
  export const urlNotificacionesSms: string = 'http://localhost:5041/Notificaciones/sms'
  export const urlValidacionCorreoFrontend: string = 'http://localhost:4200/seguridad/validar-hash-usuario-publico';
}

