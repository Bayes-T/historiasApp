import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { EditorTextoComponent } from './editor-texto/editor-texto.component';
import {NgxEditorModule} from "ngx-editor";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ErrorPageComponent,
    CalendarioComponent,
    EditorTextoComponent
  ],
  imports: [
    CommonModule, CalendarModule, NgxEditorModule, FormsModule, MaterialModule, MatDialogModule
  ],
  exports: [
    CalendarioComponent
  ]
})
export class SharedModule { }
