import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { TaskDetailComponent } from './task-detail.component';

@NgModule({
  declarations: [
    TaskDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    TaskDetailComponent,
  ]
})
export class TaskDetailModule { }
