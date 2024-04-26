import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'shared-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{

    ngOnInit(): void {

    }
  public minDate: Date = new Date ("05/07/2017");
  public maxDate: Date = new Date ("08/27/2017");
  public value: Date = new Date ("05/16/2017");

    constructor(private sharedService: SharedService) {
    }
  public cssClass = "e-custom";
  onValueChange(args: any): void {
    /*Displays selected date in the label*/
    (<HTMLInputElement>document.getElementById("selected")).textContent =
      "Selected Value: " + args.value.toLocaleDateString();
  }

}
