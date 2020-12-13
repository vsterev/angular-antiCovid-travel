import { AuthChildGuard } from '../core/guards/auth-child.guard';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reservation',
    canActivateChild: [AuthChildGuard],
    children: [
      {
        path: 'detail/:id',
        data: {
          isLogged: true,
          redirectUrl: '/home'
        },
        component: DetailComponent
      }
    ]
  }
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class VillaRoutingModule { }
export const ReservationRoutingModule = RouterModule.forChild(routes);
