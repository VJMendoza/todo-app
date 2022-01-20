import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Task } from '../../task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent implements OnInit {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) { }

  ngOnInit(): void {
  }

}
