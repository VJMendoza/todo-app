import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent implements OnInit {
  task?: Task
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<TaskDetailComponent>,
    protected tasksService: TaskService,
  ) { }

  ngOnInit(): void {
    if (this.data){
      this.tasksService.getTask(this.data)
        .subscribe((task) => {
          this.task = task
        });
    }
  }

  deleteTask(): void {
    if (this.data){ 
      this.tasksService.deleteTask(this.data)
        .subscribe(() => this.dialogRef.close({event: 'delete'}));
    }
  }

  closeTask(): void {
    this.dialogRef.close({event: 'close'})
  }

}
