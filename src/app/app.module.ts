import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './error-page/error-page.component';
import {DashboardHomeComponent} from "./dashboard/dashboard-home/dashboard-home.component";
import {MaterialModule} from "./material/material.module";
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';





@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    DashboardHomeComponent,
    ListadoPacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
