import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
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
      text: "Configuración",
      img: "settings",
      url: "/dashboard"
    }
  ]
}
