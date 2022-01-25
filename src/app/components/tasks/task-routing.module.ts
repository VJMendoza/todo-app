import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
    path: 'list',
    component: TasksComponent,
  },
  {
    path: 'add',
    component: AddTaskComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class TaskRoutingModule { }
