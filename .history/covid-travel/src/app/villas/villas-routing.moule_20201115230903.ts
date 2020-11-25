import { VillaEditComponent } from './villa-edit/villa-edit.component';
import { VillaDetailComponent } from './villa-detail/villa-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { VillaAddComponent } from './villa-add/villa-add.component';


const routes: Routes = [
  {
    path: 'villas',
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
      }
      },
  {
    path: 'edit/:id',
    component: VillaEditComponent
  }
]
  }
];

export const CauseRoutingModule = RouterModule.forChild(routes);
