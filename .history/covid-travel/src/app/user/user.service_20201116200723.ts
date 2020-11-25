import { IUser } from './../shared/interfaces/user';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser | null = null;
  // currentUser = null;

  get isLogged(): boolean {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:4000/api/user/login', { email, password }, { withCredentials: true })
      .pipe(tap((user: IUser) => {
        this.currentUser = user;
      }));
  }

  register(email: string, password: string, name: string): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:4000/api/user/register', { email, password, name }, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post('http://localhost:4000/api/user/logout', {});
  }
}
