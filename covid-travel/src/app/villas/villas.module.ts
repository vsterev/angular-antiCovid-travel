import { MapComponent } from 'src/app/shared/map/map.component';
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
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    DetailsReservationComponent,
    VillaDetailComponent,
    VillaEditComponent,
    VillaAddComponent,
    VillaBookComponent,
    LikesComponent,
    VillasListComponent,
    VillasBookedComponent,
    MapComponent
  ],
  exports: [
    VillasListComponent,
    VillasBookedComponent
  ],
  imports: [
    CommonModule,
    VillaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAly0ITa9Bt9omdeaKO4VZRueW_3N6fwhw'
    })
    // HttpClientModule
  ]
})
export class VillasModule { }
