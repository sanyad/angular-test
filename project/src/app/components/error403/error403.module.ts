import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Error403Component} from './error403.component';
import {Error403RouterModule} from './error403-router.module';

@NgModule({
  imports: [
    CommonModule,
    Error403RouterModule
  ],
  declarations: [Error403Component],
  exports: [Error403Component]
})
export class Error403Module { }
