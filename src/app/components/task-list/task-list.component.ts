import { Component, Input, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Task } from '../../task';

import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  @Input()
  tasksToDisplay: Task[] = [];

  @Input()
  titleToDisplay: string = '';

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  viewTask(taskId: number): void {
    const dialogRef = this.dialog.open(TaskDetailComponent, {
      height: '400px',
      width: '600px',
      data: taskId
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Task ${taskId} was opened`);
    })
  }
}
