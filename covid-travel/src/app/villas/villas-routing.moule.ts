import { AuthChildGuard } from '../core/guards/auth-child.guard';
import { DetailsReservationComponent } from './details-reservation/details-reservation.component';
import { VillaBookComponent } from './villa-book/villa-book.component';
import { VillaEditComponent } from './villa-edit/villa-edit.component';
import { VillaDetailComponent } from './villa-detail/villa-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { VillaAddComponent } from './villa-add/villa-add.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: 'villa',
    canActivateChild: [AuthChildGuard],
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/cause/create'
      // },
      {
        path: 'add',
        component: VillaAddComponent,
        data: {
          isLogged: true,
          redirectUrl: '/login'
        }
      },
      {
        path: 'detail/:id',
        component: VillaDetailComponent,
        data: {
          isLogged: true,
          redirectUrl: '/login'
        }
      },
      {
        path: 'edit/:id',
        component: VillaEditComponent,
        data: {
          isLogged: true,
          redirectUrl: '/login'
        }
      },
      {
        path: 'book/:id',
        component: VillaBookComponent,
        data: {
          isLogged: true,
          redirectUrl: '/login'
        }
      },
      {
        path: 'book-detail/:id',
        component: DetailsReservationComponent,
        data: {
          isLogged: true,
          redirectUrl: '/login'
        }
      }
    ]
  }
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class VillaRoutingModule { }
export const VillaRoutingModule = RouterModule.forChild(routes);
