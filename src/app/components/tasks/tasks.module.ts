import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TasksComponent } from './tasks.component';

import { TaskDetailModule } from '../task-detail/task-detail.module';
import { TaskListModule } from '../task-list/task-list.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [
    TasksComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    TaskDetailModule,
    TaskListModule,
    PipesModule,
    DirectivesModule,
    TaskRoutingModule,
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
