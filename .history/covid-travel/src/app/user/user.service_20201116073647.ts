import { IUser } from './../shared/interfaces/user';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser;

  get isLogged(): boolean {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post('http://localhost:4000/api/user/login', { email, password }, { withCredentials: true })
      .pipe(tap((user: any) => {
        this.currentUser = user;
      }))
  }
}
