import { UserService } from '../../user/user.service';
import { IUser } from './../../shared/interfaces/user';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return of(true)
    // let stream$: Observable<IUser | null>
    // if (this.userService.currentUser === undefined) {
    //   stream$ = this.userService.userVerify();
    // } else {
    //   stream$ = of(this.userService.currentUser)
    // }

    // return stream$.pipe(
    //   map((user: any) => {
    //     const isLoggedPolicy = route.data.isLogged;
    //     return typeof isLoggedPolicy !== 'boolean' || isLoggedPolicy === !!user;
    //   }),
    //   tap((canContinue) => {
    //     if (canContinue) { return; }
    //     const url = this.router.url;
    //     this.router.navigateByUrl(url);
    //   }
    //   )
    // )
  }

}
