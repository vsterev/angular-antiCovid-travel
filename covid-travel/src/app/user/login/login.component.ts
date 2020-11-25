import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  errMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }
  handleLogin({ email, password }: { email: string, password: string }): void {
    // const { email, password } = val;
    // console.log(val);
    this.userService.login(email, password)
      .subscribe((user) => {
        // console.log(user);
        console.log(this.userService.currentUser);
        this.router.navigate(['home-auth']);
      },
        (err) => {
          this.errMessage = `Login error: ${err.error.msg}`;
          console.error(this.errMessage);
        });
  }
}
