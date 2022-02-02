import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.sass']
})
export class UpdateTaskComponent implements OnInit {
  task?: Task;

  taskForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    dueDate: new FormControl(null, [this.dateValidator()]),
    isCompleted: new FormControl(null)
  });

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tasksService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tasksService.getTask(id)
      .subscribe((task) => {
        this.task = task;
        this.setFormValues();
      });
  }

  setFormValues(): void {
    if(this.task && this.taskForm){
      this.taskForm.controls.name.setValue(this.task.name);
      this.taskForm.controls.description.setValue(this.task.description);
      this.taskForm.controls.dueDate.setValue(this.task.dueDate);
      this.taskForm.controls.isCompleted.setValue(this.task.isCompleted);
    }
  }

  setTaskValues(): void {
    if(this.task && this.taskForm){
      this.task.name = this.taskForm.controls.name.value;
      this.task.description = this.taskForm.controls.description.value;
      this.task.dueDate = this.taskForm.controls.dueDate.value;
      this.task.isCompleted = this.taskForm.controls.isCompleted.value;
    }
  }

  onSubmit(): void {
    this.setTaskValues();
    
    if (this.task && this.taskForm.valid){
      console.log(this.taskForm.value);

      this.tasksService.updateTask(this.task)
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
