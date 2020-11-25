import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PassChangeComponent } from './pass-change/pass-change.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, PassChangeComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
