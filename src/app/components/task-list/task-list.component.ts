import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Task } from '../../models/task';

import { TaskDetailComponent } from '../task-detail/task-detail.component';

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

  @Output()
  didDelete = new EventEmitter<boolean>();

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  viewTask(taskId: number): void {
    const dialogRef = this.dialog.open(TaskDetailComponent, {
      minHeight: '500px',
      height: '60%',
      width: '600px',
      data: taskId
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result && result.event === 'delete'){
        this.didDelete.emit(true);
      } else {
        this.didDelete.emit(false);
      }
    })
  }
}
