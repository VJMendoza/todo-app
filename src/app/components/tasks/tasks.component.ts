import { Component, OnInit } from '@angular/core';

import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  Tasks: Task[] = TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
