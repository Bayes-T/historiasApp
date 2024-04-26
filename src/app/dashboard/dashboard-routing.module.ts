import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardHomeComponent} from "./dashboard-layout/dashboard-layout.component";
import {ListadoPacientesComponent} from "./listado-pacientes/listado-pacientes.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'listado',
        component: ListadoPacientesComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }


