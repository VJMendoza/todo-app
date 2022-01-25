import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskComponent } from './add-task.component';

@NgModule({
  declarations: [
    AddTaskComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AddTaskComponent,
  ]
})
export class AddTaskModule { }
