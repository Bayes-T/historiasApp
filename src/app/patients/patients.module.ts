import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import {PatientsRoutingModule} from "./patients-routing.module";



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
