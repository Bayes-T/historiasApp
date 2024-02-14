import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {UsersRoutingModule} from "./users-routing.module";



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
