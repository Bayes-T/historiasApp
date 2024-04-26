import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../validation.service";
import {registerUser} from "../interfaces/authInterfaces";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(private formbuilder: FormBuilder, private validationService:ValidationService, private authservice: AuthService) {
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

    if (this.registerForm.invalid) return
    console.log(this.registerForm.controls['password'].errors)

    const registerUser:registerUser = {
      Name : this.registerForm.value.name!,
      Email : this.registerForm.value.email!,
      Password: this.registerForm.value.password!
    }

    this.authservice.register(registerUser).subscribe();

  }
}
