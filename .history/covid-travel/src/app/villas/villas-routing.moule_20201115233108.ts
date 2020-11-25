import { DetailsReservationComponent } from './details-reservation/details-reservation.component';
import { VillaBookComponent } from './villa-book/villa-book.component';
import { VillaEditComponent } from './villa-edit/villa-edit.component';
import { VillaDetailComponent } from './villa-detail/villa-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { VillaAddComponent } from './villa-add/villa-add.component';


const routes: Routes = [
  {
    path: 'villa',
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/cause/create'
      // },
      {
        path: 'add',
        component: VillaAddComponent
      },
      {
        path: 'detail/:id',
        component: VillaDetailComponent
      },
      {
        path: 'edit/:id',
        component: VillaEditComponent
      },
      {
        path: 'book/:id',
        component: VillaBookComponent
      },
      {
        path: 'book-detail/:id',
        component: DetailsReservationComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const VillaRoutingModule = RouterModule.forChild(routes);
