import { UserRoutingModule } from './user-routing.moule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { FormsModule } from '@angular/forms';
import { VillasModule } from '../villas/villas.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, PassChangeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    VillasModule
  ],
  exports: [
    // LoginComponent
  ]
})
export class UserModule { }
