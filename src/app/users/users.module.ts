import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './userProfile/user.component';
import {UsersRoutingModule} from "./users-routing.module";
import { UserLayoutComponent } from './user-layout/user-layout.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    UserProfileComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UsersModule { }
