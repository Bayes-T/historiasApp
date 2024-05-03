import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientLayoutComponent} from "./patientLayout/patient.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {EditorTextoComponent} from "../shared/editor-texto/editor-texto.component";

const routes: Routes = [
  {
    path: '',
    component: PatientLayoutComponent,
    children: [
      {
        path: 'idejemplo',
        component: PatientDetailComponent
      },
      {
        path: 'agregarHistoria',
        component: EditorTextoComponent
      },
      {
        path: '**',
        component: PatientDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
