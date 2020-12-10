import { CarouselComponent } from './../shared/carousel/carousel.component';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AgmCoreModule } from '@agm/core';
import { NguCarouselModule } from '@ngu/carousel';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatProgressBarModule } from '@angular/material/progress-bar'

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
    MapComponent,
    CarouselComponent,
    ImageUploadComponent
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
    MatToolbarModule,
    MatProgressBarModule,
    NgxMatFileInputModule,
    NguCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAly0ITa9Bt9omdeaKO4VZRueW_3N6fwhw'
    }),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCcKMbiQ67cM4oc0p_Vz8S_cV4p3Q5erbE',
      authDomain: 'covid-travel-36e4f.firebaseapp.com',
      databaseURL: 'https://covid-travel-36e4f-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'covid-travel-36e4f',
      storageBucket: 'covid-travel-36e4f.appspot.com',
      messagingSenderId: '732322297599',
      appId: '1:732322297599:web:aae2b5839d648992493eca',
      measurementId: 'G-HH1PSPFNR5'
    }),
    AngularFireStorageModule
    // HttpClientModule
  ]
})
export class VillasModule { }
