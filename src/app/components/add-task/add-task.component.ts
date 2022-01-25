import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  task: Task = this.createTask();

  constructor() { }

  ngOnInit(): void {
  }

  private createTask(): Task {
    return {
      name: '',
      description: ''
    }
  }

}
