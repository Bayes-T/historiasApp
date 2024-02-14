import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {path: 'auth',
  loadChildren: () => import('./auth/auth.module').then (m => m.AuthModule)
  },
  {path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {path: 'patients',
    loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
  },
  {path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: '404',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


