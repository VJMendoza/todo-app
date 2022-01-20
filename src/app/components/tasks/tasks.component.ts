import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;
  activeTasks: Task[] = TASKS;
  dueTasks: Task[] = TASKS;
  completeTasks: Task[] = TASKS;
  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  viewTask(task: Task): void {
    this.dialog.open(TaskDetailComponent, {
      height: '400px',
      width: '600px',
      data: task
    });

    this.dialog.afterAllClosed.subscribe(result => {
      console.log(`${task.name} was opened`);
    })
  }

}
