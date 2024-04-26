import { Component } from '@angular/core';
import {dataHistorias} from "../../../assets/dataHistorias";

@Component({
  selector: 'app-patientLayout-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent {

  displayedColumns: string[] = ['Fecha', 'Profesional', 'Nota'];
  dataSource = dataHistorias;

  agregarEntrada(){
    console.log("Agregando entrada")
  }
}
