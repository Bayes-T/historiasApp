import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientLayoutComponent } from './patientLayout/patient.component';
import {PatientsRoutingModule} from "./patients-routing.module";
import {MaterialModule} from "../material/material.module";
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    PatientLayoutComponent,
    PatientDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientsRoutingModule,
    MaterialModule,
  ]
})
export class PatientsModule { }
