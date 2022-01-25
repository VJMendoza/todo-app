import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'dueStatus'
})
export class DueStatusPipe implements PipeTransform {

  transform(tasks: Task[]): Task[] {
    var dueTasks: Task[] = [];

    tasks.forEach(task => {
      if ( task.dueDate) {
        if (new Date(task.dueDate).getDate() == new Date().getDate() + 1 ||
            new Date(task.dueDate).getDate() == new Date().getDate()){
          dueTasks.push(task);
        }
      }
    });

    return dueTasks;
  }

}
