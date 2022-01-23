import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DueStatusPipe } from './due-status.pipe';
import { CompletedStatusPipe } from './completed-status.pipe';

@NgModule({
  declarations: [
    DueStatusPipe,
    CompletedStatusPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DueStatusPipe,
    CompletedStatusPipe
  ]
})
export class PipesModule { }
