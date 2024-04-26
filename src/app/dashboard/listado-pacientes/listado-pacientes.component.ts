import { Component } from '@angular/core';
import {dataPacientes} from "../../../assets/DataPacientes";

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.css']
})
export class ListadoPacientesComponent {
  displayedColumns: string[] = ['Indice', 'Nombre', 'DNI', 'Edad', 'OSocial', 'Opciones'];

  dataSource = dataPacientes;
}
