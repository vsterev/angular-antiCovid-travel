import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nameRegex = new RegExp(/^[a-zA-Z\ ]{5,}$/);
  emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  errMessage = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Covid Travel - Register form')
  }
  handleRegister({ email, password, name }: { email: string, password: string, name: string }): void {
    // const { email, password } = val;
    console.log(email, password, name);
    this.userService.register(email, password, name)
      .subscribe((user) => {
        // console.log(user);
        console.log(this.userService.currentUser);
        this.router.navigate(['/home-auth']);
      },
        (err) => {
          this.errMessage = `Login error: ${err.error.msg}`;
          console.error(this.errMessage);
        });
  }
}
