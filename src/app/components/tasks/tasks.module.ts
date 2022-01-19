import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TaskDetailModule } from '../task-detail/task-detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskDetailModule
  ],
  exports: [
    TasksComponent,
  ]
})
export class TasksModule { }
