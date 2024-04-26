import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardHomeComponent {
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
