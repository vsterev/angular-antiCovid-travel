import { IUser } from './../shared/interfaces/user';
import { tap, map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;
  // currentUser: IUser | null | undefined | any = undefined;
  // currentUser = null;

  get currentUserInfo(): any {
    return this.currentUser;
  }

  get isLogged(): boolean {
    return !!this.currentUser;
  }
  authCompleted$ = this.http.get('user/verify').pipe(shareReplay(1));
  constructor(private http: HttpClient, private router: Router) {
    // this.http.get<IUser>('user/verify')
    this.authCompleted$
      .subscribe(
        (user) => {
          this.currentUser = user;
        },
        () => {
          this.currentUser = null;
        }
      );
  }

  login(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>('user/login', { email, password })
      .pipe(tap((user: IUser) => {
        this.currentUser = user;
      }));
  }

  register(email: string, password: string, name: string): Observable<IUser> {
    return this.http.post<IUser>('user/register', { email, password, name })
      .pipe(tap((user: IUser) => {
        this.currentUser = user;
      }));
  }
  nameChange(name: { name: string }): Observable<any> {
    return this.http.put('user/namechange', name);
  }
  passChange(passwords: { password: string, oldPassword: string }): Observable<any> {
    return this.http.put('user/passchange', passwords);
  }

  // tslint:disable-next-line: typedef
  logout() {
    return this.http.post<null>('user/logout', {})
      .pipe(tap(() => {
        return this.currentUser = null;
      }));
  }
}
