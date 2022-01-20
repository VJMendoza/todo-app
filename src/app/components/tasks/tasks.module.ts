import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { TasksComponent } from './tasks.component';
import { TaskDetailModule } from '../task-detail/task-detail.module';


@NgModule({
  declarations: [
    TasksComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    TaskDetailModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
