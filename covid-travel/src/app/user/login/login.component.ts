import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  // errMessage = '';
  // hide = true;
  emailRegex: RegExp;
  errMessage: string;
  hide: boolean;
  constructor(
    private userService: UserService,
    private router: Router,
    private titleService: Title
  ) {
    this.emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    this.errMessage = '';
    this.hide = true;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Covid Travel - Login page');
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
