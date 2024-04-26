import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [
    ErrorPageComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule, CalendarModule
  ],
  exports: [
    CalendarioComponent
  ]
})
export class SharedModule { }
