import { IUser } from './../../shared/interfaces/user';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  currentUser: IUser | null | undefined;
  constructor(private userService: UserService, private router: Router) { }

  ngAfterViewInit(): void {
    this.currentUser = this.userService.currentUserInfo;
  }

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
