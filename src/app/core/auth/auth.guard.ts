import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PasswordService } from "../password/password.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private passwordService: PasswordService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let loggedIn = this.passwordService.loggedIn;
    if (!loggedIn) {
      this.router.navigate(['/login']);
    }
    return loggedIn;
  }

}
