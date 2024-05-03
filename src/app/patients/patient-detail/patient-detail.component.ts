import { Component, Inject } from '@angular/core';
import {dataHistorias} from "../../../assets/dataHistorias";
import {EditorTextoComponent} from "../../shared/editor-texto/editor-texto.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";


@Component({
  selector: 'app-patientLayout-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent {
  constructor(public dialog: MatDialog) {}


  displayedColumns: string[] = ['Fecha', 'Profesional', 'Nota'];
  dataSource = dataHistorias;


  agregarEntrada(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '350px'
    dialogConfig.width = '500px'
    dialogConfig.autoFocus = true

    this.dialog.open(EditorTextoComponent, dialogConfig)

    const dialogRef = this.dialog.open(EditorTextoComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
        if(!result) return
        else {
          //METODO ENVIAR RESULT A BASE DE DATOS
          console.log(result)
        }
      }
    )
    console.log("Agregando entrada")
  }

  }
