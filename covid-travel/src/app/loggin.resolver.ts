import { UserService } from './user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogginResolver implements Resolve<boolean> {
  constructor(private http: HttpClient, private userService: UserService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.userService.authCompleted$;

  }
}
