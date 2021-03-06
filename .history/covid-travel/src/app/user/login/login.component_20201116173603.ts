import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  handleLogin(val: { email: string, password: string }): void {
    const { email, password } = val;
    console.log(val);
    this.userService.login(email, password)
      .subscribe((user) => {
        console.log(user);
        console.log('currentUser1' + this.userService.currentUser)
      },
        (err) => console.log(err));
  }
}
