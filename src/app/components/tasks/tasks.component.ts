import { Component, OnInit } from '@angular/core';

import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
