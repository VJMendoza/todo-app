import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.sass']
})
export class UpdateTaskComponent implements OnInit {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tasksService.getTask(id)
      .subscribe(task => this.task = task);
  }

}
