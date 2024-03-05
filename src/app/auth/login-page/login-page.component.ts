import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../validation.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private formbuilder: FormBuilder, private validationService:ValidationService) {
  }

  public loginForm = this.formbuilder.group({
    email: ["", [Validators.required, Validators.minLength(6), Validators.pattern(this.validationService.emailPattern)]],
    password: ["", [Validators.required]]
  })

  isValidField(field:string){
    return this.validationService.isValidField(this.loginForm, field)
  }

  onSave():void{

    if (this.loginForm.invalid) return
    console.log(this.loginForm.value)
  }
}
