import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../../models/task';
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
  
  constructor(
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

  refresh(isRefresh: boolean): void{
    if (isRefresh == true){
      this.ngOnInit();
    }
  }

}
