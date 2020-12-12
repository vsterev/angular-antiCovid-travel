import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.moule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { FormsModule } from '@angular/forms';
import { VillasModule } from '../villas/villas.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, PassChangeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    VillasModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    // LoginComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
