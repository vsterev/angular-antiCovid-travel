import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoggedGuard } from '../auth-logged.guard';

const routes: Routes = [
  {
    path: 'reservation',
    children: [
      {
        path: 'detail/:id',
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
