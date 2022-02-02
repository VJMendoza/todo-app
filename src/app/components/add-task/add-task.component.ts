import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
      name: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
      description: new FormControl(null, [Validators.required,  Validators.maxLength(255)]),
      dueDate: new FormControl(new Date(), [this.dateValidator()]),
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

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any } | null => {
      const today = new Date().getDate();

      if (!(control && control.value)){
        return null;
      }

      return control.value.getDate() < today
        ? {invalidDate: 'Cannot use past date'}
        : null
    }
  }

}
