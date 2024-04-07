import { /* inject, */ BindingScope, injectable} from '@loopback/core';
const fetch = require('node-fetch');


@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */


  async EnviarNotificacion(datos: any, url: string) {
    await fetch(url, {
      method: 'post',
      body: JSON.stringify(datos),
      headers: {'Content-Type': 'application/json'},
    })
  }
}
