import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TaskDetailModule } from '../task-detail/task-detail.module';
import { TaskDetailComponent } from '../task-detail/task-detail.component';



@NgModule({
  declarations: [
    TasksComponent,
  ],
  imports: [
    CommonModule,
    TaskDetailModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
