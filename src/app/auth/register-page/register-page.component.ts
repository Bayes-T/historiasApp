import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../validation.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(private formbuilder: FormBuilder, private validationService:ValidationService) {
  }

  public registerForm:FormGroup = this.formbuilder.group({
    name: ["", [Validators.required, Validators.minLength(6)]],
    email: ["", [Validators.required, Validators.pattern(this.validationService.emailPattern)]],
    password: ["", [Validators.required, Validators.pattern(this.validationService.passwordPattern)]]
  })

  isValidField(field:string){
    return this.validationService.isValidField(this.registerForm, field)
  }

  onSave():void{

    // if (this.registerForm.invalid) return
    console.log(this.registerForm.controls['password'].errors)
  }
}
