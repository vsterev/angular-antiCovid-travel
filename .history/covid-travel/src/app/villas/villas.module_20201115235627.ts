import { RouterModule } from '@angular/router';
import { VillaRoutingModule } from './villas-routing.moule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsReservationComponent } from './details-reservation/details-reservation.component';
import { VillaDetailComponent } from './villa-detail/villa-detail.component';
import { VillaEditComponent } from './villa-edit/villa-edit.component';
import { VillaAddComponent } from './villa-add/villa-add.component';
import { VillaBookComponent } from './villa-book/villa-book.component';



@NgModule({
  declarations: [DetailsReservationComponent, VillaDetailComponent, VillaEditComponent, VillaAddComponent, VillaBookComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    VillaRoutingModule
  ]
})
export class VillasModule { }
