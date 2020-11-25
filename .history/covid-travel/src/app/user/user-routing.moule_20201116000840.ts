import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

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
        redirectTo: '/login'
      },
      {
        path: 'register',
        redirectTo: '/register'

      },
      {
        path: 'profile/:userId',
        component: ProfileComponent
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
