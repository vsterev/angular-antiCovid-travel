import { IUser } from './../shared/interfaces/user';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    this.http.post('http://localhost:4000/api/user/login', { withcredentials: true }, { email, password })
  }
}
