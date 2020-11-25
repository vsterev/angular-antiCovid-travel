import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoggedGuard implements CanActivate {
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService, private router: Router, private http: HttpClient) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // if (this.userService.isLogged === route.data.isLogged && route.data.isLogged) {
    //   this.router.navigate(['home-auth']);
    //   return true;
    // } else if (this.userService.isLogged === route.data.isLogged && !route.data.isLogged) {
    //   this.router.navigate(['home']);
    //   return true;
    // }
    // this.router.navigate(['login']);
    // return false;
    //   if (this.isLogged) {
    //     return true;
    //   }
    //   console.log(this.isLogged)
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return this.http.get('user/verify')
      .pipe(tap(
        () => {
          console.log('true')
          return [true];
        },
        () => {
          console.log('false')
          this.router.navigate(['login']);
          return [false];
        }
      ));
  }
}
