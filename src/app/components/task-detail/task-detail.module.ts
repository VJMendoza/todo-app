import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskDetailComponent } from './task-detail.component';

@NgModule({
  declarations: [
    TaskDetailComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskDetailComponent,
  ]
})
export class TaskDetailModule { }
