import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElevateDirective } from './elevate.directive';

@NgModule({
  declarations: [
    ElevateDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElevateDirective,
  ]
})
export class DirectivesModule { }
