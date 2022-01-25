import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TasksComponent } from './tasks.component';

import { TaskDetailModule } from '../task-detail/task-detail.module';
import { TaskListModule } from '../task-list/task-list.module';
import { AddTaskModule } from '../add-task/add-task.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [
    TasksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    TaskDetailModule,
    TaskListModule,
    AddTaskModule,
    PipesModule,
    DirectivesModule,
    TaskRoutingModule,
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
