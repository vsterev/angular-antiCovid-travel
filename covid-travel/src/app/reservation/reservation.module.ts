import { ReservationRoutingModule } from './reservation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    MatInputModule,
    MatButtonModule,

  ]
})
export class ReservationModule { }
