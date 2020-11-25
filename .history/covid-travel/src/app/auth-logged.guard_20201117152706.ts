import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoggedGuard implements CanActivate {
  get isLogged() {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (this.userService.isLogged === route.data.isLogged && route.data.isLogged) {
    //   this.router.navigate(['home-auth']);
    //   return true;
    // } else if (this.userService.isLogged === route.data.isLogged && !route.data.isLogged) {
    //   this.router.navigate(['home']);
    //   return true;
    // }
    // this.router.navigate(['login']);
    // return false;
    if (this.isLogged) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
