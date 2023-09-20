import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Error404RouterModule} from "./error404-router.module";
import {Error404Component} from "./error404.component";

@NgModule({
  imports: [
    CommonModule,
    Error404RouterModule
  ],
  declarations: [Error404Component],
  exports: [Error404Component]
})
export class Error404Module { }
