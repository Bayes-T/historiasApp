import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-patientLayout',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientLayoutComponent {

  constructor(public router: Router) {
  }

  public itemList = [
    {
      text: "Inicio",
      img: "home",
      url: "/dashboard"
    },
    {
      text: "Mi cuenta",
      img: "person",
      url: "/dashboard"
    },
    {
      text: "Mis pacientes",
      img: "person",
      url: "/patients/listado"
    },
    {
      text: "Configuración",
      img: "settings",
      url: "/dashboard"
    }
  ]
}
