import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  activeTasks: Task[] = TASKS;
  dueTasks: Task[] = TASKS;
  completeTasks: Task[] = TASKS;
  
  constructor(
    public dialog: MatDialog,
    protected tasksService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks
      });
  }

  viewTask(taskId: number): void {
    this.dialog.open(TaskDetailComponent, {
      height: '400px',
      width: '600px',
      data: taskId
    });

    this.dialog.afterAllClosed.subscribe(result => {
      console.log(`Task ${taskId} was opened`);
      this.getTasks();
    })
  }

}
