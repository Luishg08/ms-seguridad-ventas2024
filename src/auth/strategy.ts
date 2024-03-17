import {AuthenticationBindings, AuthenticationMetadata, AuthenticationStrategy} from '@loopback/authentication';
import {inject, service} from '@loopback/core';
import {repository} from '@loopback/repository';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import {RolMenuRepository} from '../repositories';
import {AuthService, SeguridadUsuarioService} from '../services';
export class BasicAuthenticationStrategy implements AuthenticationStrategy {
  name: string = 'auth';

  constructor(
    @service(SeguridadUsuarioService)
    private servicioSeguridad: SeguridadUsuarioService,
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata[],
    @repository(RolMenuRepository)
    private repositorioRolMenu: RolMenuRepository,
    @service(AuthService)
    private servicioAuth: AuthService
  ) { }


  /**
   * Autenticación de un usuario frente a una acción en la base de datos
   * @param request la solicitud con el toquen
   * @returns el perfil de usuario, undefined cuando no tiene permiso o un httpError
   */
  async authenticate(request: Request): Promise<UserProfile | undefined> {
    let token = parseBearerToken(request)
    if (token) {
      let idRol = this.servicioSeguridad.obtenerRolDesdeToken(token)
      console.log("idRol: ", idRol);
      let idMenu: string = this.metadata[0].options![0]
      console.log("idMenu: ", idMenu,);
      let accion: string = this.metadata[0].options![1]
      console.log("accion: ", accion);
      console.log(this.metadata);
      try {
        let respuesta = await this.servicioAuth.VerificarPermisoDeUsuarioPorRol(idRol, idMenu, accion)
        return respuesta
      } catch (e) {
        throw e
      }


    }
    throw new HttpErrors[401]("No es posible ejecutar la acción por falta de un token.")
  }
}
