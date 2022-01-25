import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  task: Task = this.createTask();

  taskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(''),
    isCompleted: new FormControl('')
  })

  constructor(
    protected taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    if (this.taskForm.valid){
      console.log(this.taskForm.value);
    }
  }

  private createTask(): Task {
    return {
      name: '',
      description: ''
    }
  }

}
