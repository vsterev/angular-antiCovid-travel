import { IUser } from './../../shared/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  currentUser: IUser | null | undefined;
  // currentUserName = '';
  get user(): IUser {
    return this.userService.currentUserInfo;

  }
  constructor(private userService: UserService, private router: Router) {
    // this.currentUser = this.userService.currentUserInfo;
  }

  // ngAfterViewInit(): void {
  //   this.currentUser = this.userService.currentUserInfo;
  // }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // this.currentUserName = this.userService.currentUserName;
  }

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
