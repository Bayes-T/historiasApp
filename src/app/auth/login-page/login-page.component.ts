import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../validation.service";
import {AuthService} from "../auth.service";
import {loginUser} from "../interfaces/authInterfaces";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private formbuilder: FormBuilder, private validationService:ValidationService, private authservice: AuthService) {
  }

  public loginForm = this.formbuilder.group({
    email: ["", [Validators.required, Validators.minLength(6), Validators.pattern(this.validationService.emailPattern)]],
    password: ["", [Validators.required]]
  })

  isValidField(field:string){
    return this.validationService.isValidField(this.loginForm, field)
  }

  onSave(){

    if (this.loginForm.invalid) return
    console.log(this.loginForm.value)
    const loginUser:loginUser = {
      Email: this.loginForm.value.email!,
      Password: this.loginForm.value.password!
    }
    this.authservice.login(loginUser).subscribe()

  }
}
