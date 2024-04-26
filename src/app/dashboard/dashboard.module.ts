import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardHomeComponent} from "./dashboard-layout/dashboard-layout.component";
import {MaterialModule} from "../material/material.module";
import {ListadoPacientesComponent} from "./listado-pacientes/listado-pacientes.component";
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    DashboardHomeComponent,
    ListadoPacientesComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        DashboardRoutingModule,
      SharedModule
    ],
  exports: [
  ]
})
export class DashboardModule { }
