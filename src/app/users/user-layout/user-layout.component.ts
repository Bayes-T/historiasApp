import { Component } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent {
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
