import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../shared/services/token.service';
import { UtilToolsService } from '../shared/services/util-tools.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private utilToolsService: UtilToolsService
  ) { }

  //Si el usuario esta logeado pero intenta acceder a la vista de Login se le redirige a Home (Index)
  //Es un guard simple que verifica si el usuario esta logeado: comunmente usado en Login/Register
  //Se indica en Routing
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("-------------------------Inicio can Activate Login")
    console.log('Esta es la ruta/////////////////////');
    console.log(route);
    console.log(route.url[0].path);
    // const flagLogged =  this.tokenService.isLogged();

    if (this.tokenService.isLogged()) {
      this.router.navigate(['/dashboard']);
      console.log("-------------------------Exited by Login Guard");
      return false;
    }
    console.log("-------------------------Can by Login Guard");

    return true;
  }

}
