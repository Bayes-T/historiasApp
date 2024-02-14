import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {LogoutPageComponent} from "./logout-page/logout-page.component";

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'login',
        component: LoginPageComponent
      },
      {path: 'register',
        component: RegisterPageComponent
      },
      {path: 'logout',
        component: LogoutPageComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
