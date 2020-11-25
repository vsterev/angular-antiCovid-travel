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

    if (!this.isLogged) {
      return false;
    }
    return true;
  }
}
