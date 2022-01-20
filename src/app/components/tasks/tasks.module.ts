import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { TasksComponent } from './tasks.component';
import { TaskDetailModule } from '../task-detail/task-detail.module';


@NgModule({
  declarations: [
    TasksComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    TaskDetailModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
