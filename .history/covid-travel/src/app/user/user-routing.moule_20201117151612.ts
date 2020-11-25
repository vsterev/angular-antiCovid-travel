import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoggedGuard } from '../auth-logged.guard';

const routes: Routes = [
  {
    path: 'user',
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/cause/create'
      // },
      {
        path: 'login',
        redirectTo: '/login',
        canActivate: [AuthLoggedGuard],
        data: {
          isLogged: false
        }
      },
      {
        path: 'register',
        redirectTo: '/register',
        canActivate: [AuthLoggedGuard],
        data: {
          isLogged: false
        }

      },
      {
        path: 'profile/:userId',
        component: ProfileComponent,
        canActivate: [AuthLoggedGuard],
        data: {
          isLogged: true
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
export const UserRoutingModule = RouterModule.forChild(routes);
