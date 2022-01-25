import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddTaskComponent } from './add-task.component';

@NgModule({
  declarations: [
    AddTaskComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddTaskComponent,
  ]
})
export class AddTaskModule { }
