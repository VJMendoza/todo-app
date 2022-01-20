import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatDialogModule } from '@angular/material/dialog';

import { TaskDetailComponent } from './task-detail.component';

@NgModule({
  declarations: [
    TaskDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  exports: [
    TaskDetailComponent,
  ]
})
export class TaskDetailModule { }
