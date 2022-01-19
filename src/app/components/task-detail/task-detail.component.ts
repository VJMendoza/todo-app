import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent implements OnInit {

  @Input() task?: Task;
  
  constructor() { }

  ngOnInit(): void {
  }

}
