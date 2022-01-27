import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    protected tasksService: TaskService,
    private fb: FormBuilder,
    private location: Location
  ) { 
    this.taskForm = fb.group({
      name: new FormControl(),
      description: new FormControl(),
      dueDate: new FormControl(new Date()),
      isCompleted: false,
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void  {
    if (this.taskForm.valid){
      console.log(this.taskForm.value);

      this.tasksService.addTask(this.taskForm.value)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
