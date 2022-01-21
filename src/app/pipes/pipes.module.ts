import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DueStatusPipe } from './due-status.pipe';

@NgModule({
  declarations: [
    DueStatusPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DueStatusPipe,
  ]
})
export class PipesModule { }
