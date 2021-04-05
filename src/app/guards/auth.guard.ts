import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor( private auth: AuthService,
    private router: Router) {}

  canActivate(): boolean  {
    if ( this.auth.estaAutenticado() ) {
      return true;
    } else {
    this.router.navigateByUrl('/login');
      return false;
    }
  }

  canActivateChild(): boolean {
    return true;
  }
  
  
// canActivate(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
// canActivateChild(
//   childRoute: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
  
}
