import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LogoutPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
