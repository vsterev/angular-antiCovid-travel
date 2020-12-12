import { AuthGuard } from './core/guards/auth.guard';
import { LogginResolver } from './loggin.resolver';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthLoggedGuard } from './auth-logged.guard';
import { TestGuard } from './test.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [TestGuard],
    // canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'home-auth',
    component: HomeAuthComponent,
    canActivate: [TestGuard],
    // canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
    // canActivate: [AuthLoggedGuard],
    // data: {
    //   isLogged: true
    // }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [TestGuard],
    // resolve: [LogginResolver]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
export const AppRoutingModule = RouterModule.forRoot(routes);
