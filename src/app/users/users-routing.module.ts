import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLayoutComponent} from "./user-layout/user-layout.component";
import {UserProfileComponent} from "./userProfile/user.component";

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: '**',
        component: UserProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
