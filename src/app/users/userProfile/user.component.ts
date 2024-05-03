import {Component, ElementRef, ViewChild} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-userProfile',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserProfileComponent {
    constructor(private userService: UserService ) {
    }

  public Nombre = "Nombre service prueba";
  public Email = "Nombre service prueba";
  public Password1 = "";
  public Password2 = "";

  @ViewChild('NombreInput') NombreInput!: ElementRef;
  @ViewChild('EmailInput') EmailInput!: ElementRef;
  @ViewChild('Password1Input') Password1Input!: ElementRef;
  @ViewChild('Password2Input') Password2Input!: ElementRef;

  editarNombre():void{
    if (this.NombreInput == null) return
    console.log(this.NombreInput.nativeElement.value)
  }

  editarEmail():void{
    if (this.EmailInput == null) return
    console.log(this.EmailInput.nativeElement.value)
  }

  cambiarPassword():void{
    if (this.Password2Input == null) return
    console.log(this.Password2Input.nativeElement.value)
  }
}
