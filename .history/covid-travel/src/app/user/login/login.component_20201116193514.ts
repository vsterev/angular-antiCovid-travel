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
  handleLogin({ email, password }: { email: string, password: string }): void {
    // const { email, password } = val;
    // console.log(val);
    this.userService.login(email, password)
      .subscribe((user) => {
        // console.log(user);
        console.log(this.userService.currentUser);
      },
        (err) => console.error('Login error: ' + err.error.msg));
  }
}
