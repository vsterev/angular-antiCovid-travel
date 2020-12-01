import { UserService } from 'src/app/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser;
  nameChanging: boolean;
  passChanging: boolean;
  errMsg: string | undefined;
  passRegex: RegExp;

  constructor(
    private userService: UserService,
    private router: Router,
    private location: Location
  ) {
    this.errMsg = undefined;
    this.user = this.userService.currentUser;
    this.nameChanging = false;
    this.passChanging = false;
    this.passRegex = new RegExp(/^[a-zA-Z0-9]{5,}$/);
  }

  ngOnInit(): void {

  }
  changeNameHandler(): void {
    this.nameChanging = !this.nameChanging;
    this.passChanging = false;
    this.errMsg = undefined;
  }
  nameChange(nameObj: { newName: string }): void {
    console.log(nameObj.newName);
    // this.userService.
    this.userService.nameChange({ name: nameObj.newName }).pipe(
      tap(test => {
        this.nameChanging = !this.nameChanging;
        this.userService.currentUser.name = nameObj.newName;
      })
    )
      .subscribe(() => {
        return;
      }
        , (err) => this.errMsg = err.error.msg);
  }
  changePasswordHandler(): void {
    this.passChanging = !this.passChanging;
    this.nameChanging = false;
    this.errMsg = undefined;
  }
  passChange(passObj: { oldPass: string, newPass: string, reNewPass: string }): void {
    const oldPassword = passObj.oldPass;
    const password = passObj.newPass;
    this.userService.passChange({ oldPassword, password })
      .subscribe(() => {
        this.passChanging = !this.passChanging;
      },
        (err) => {
          console.log(err.error.msg);
          this.errMsg = err.error.msg;
        });
  }
  addVillaClickHandler(): void {
    this.router.navigate(['villa/add'], { state: { goBack: true } });
  }
  backHandler(): void {
    this.location.back();
  }
}
