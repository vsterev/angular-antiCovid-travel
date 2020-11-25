import { LoginComponent } from './../../../../.history/covid-travel/src/app/user/login/login.component_20201115202548';
import { UserRoutingModule } from './user-routing.moule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, PassChangeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UserModule { }
