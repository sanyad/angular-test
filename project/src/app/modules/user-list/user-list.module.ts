import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UserListComponent} from "./user-list.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {UserListRoutingModule} from "./user-list-routing.module";
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    UserListRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserComponent
  ],
  entryComponents: [
    UserListComponent
  ]
})
export class UserListModule { }
