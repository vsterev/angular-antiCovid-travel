import { UserService } from 'src/app/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.currentUser;
  }
  user: IUser;
  ngOnInit(): void {

  }
  changeNameHandler(): void {

  }
  changePasswordHandler(): void {

  }
  addVillaClickHandler(): void {
    this.router.navigate(['villa/add'], { state: { goBack: true } });
  }
}
