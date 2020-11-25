import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-travel';

  constructor(private userService: UserService) { }
  get isLoading(): boolean {
    return this.userService.currentUser !== undefined;
  }

}
