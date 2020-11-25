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
  get currentUser(): IUser | null {
    return this.userService.currentUser;
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.userService.logout().subscribe((res) => {
      this.router.navigate(['']);
    });
  }
}
