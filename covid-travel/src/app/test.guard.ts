import { HttpClient } from '@angular/common/http';
import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { iif, Observable, of } from 'rxjs';
import { tap, map, switchMap, mapTo, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  // get isLooged(): boolean {
  //   return this.userService.isLogged;
  // }
  constructor(private userService: UserService, private router: Router, private http: HttpClient) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // state: RouterStateSnapshot): any {
    // console.log(this.isLooged)
    // if (this.isLooged) {
    //   return true;
    // }
    // // const isLogged = document.
    // this.router.navigate(['/login']);
    // return false;
    // return this.userService.authCompleted$.toPromise()
    //   .then((a) => {
    //     console.log(a);
    //     return true;
    //   })
    // .catch((b) = {
    //   console.log(b)
    //   return false;
    // })
    const isLoggedFromRoute = route.data.isLogged;

    // if (!this.userService.isLogged) {
    if (this.userService.isLogged) {
      if (isLoggedFromRoute === true) {
        return of(true);
      }
      return of(false);
    }
    return this.http.get('user/verify')
      .pipe(
        map((a) => {
          console.log('minava', a); // от тук минава ако е логнат и има куки
          if (isLoggedFromRoute === true) {
            return true;
          }
          else {
            this.router.navigate(['**']);
            return false;
          }
        },
          () => console.log('greshka') // тук минава tap, но не минава map
          // (b) => {
          // console.log(b)
          // if (isLoggedFromRoute === false) {
          //   return of(true);
          // }
          // else {
          //   this.router.navigate(['login']);
          //   return of(false);
          // }
          // }
        ),
        catchError((c) => {
          console.log('greshka2', c);
          if (isLoggedFromRoute === false) {
            return of(true);
          }
          this.router.navigate(['login'])
          return of(false)
        }) // ако няма куки минава от тук и дава грешка
      );
    // }
    // else if (isLoggedFromRoute === this.userService.isLogged) {
    //   return true;
    // }
    // else {
    //   const url = this.router.url;
    //   this.router.navigateByUrl(url);
    //   return false;
    // }
  }
}
