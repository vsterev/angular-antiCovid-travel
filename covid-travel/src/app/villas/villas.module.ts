import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VillaRoutingModule } from './villas-routing.moule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsReservationComponent } from './details-reservation/details-reservation.component';
import { VillaDetailComponent } from './villa-detail/villa-detail.component';
import { VillaEditComponent } from './villa-edit/villa-edit.component';
import { VillaAddComponent } from './villa-add/villa-add.component';
import { VillaBookComponent } from './villa-book/villa-book.component';
import { LikesComponent } from './likes/likes.component';
import { VillasListComponent } from './villas-list/villas-list.component';
import { VillasBookedComponent } from './villas-booked/villas-booked.component';



@NgModule({
  declarations: [
    DetailsReservationComponent,
    VillaDetailComponent,
    VillaEditComponent,
    VillaAddComponent,
    VillaBookComponent,
    LikesComponent,
    VillasListComponent,
    VillasBookedComponent
  ],
  exports: [
    VillasListComponent,
    VillasBookedComponent
  ],
  imports: [
    CommonModule,
    VillaRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // HttpClientModule
  ]
})
export class VillasModule { }
