import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task';

@Pipe({
  name: 'dueStatus'
})
export class DueStatusPipe implements PipeTransform {

  transform(tasks: Task[], isDue?: boolean): Task[] {
    if (tasks){
      return tasks.filter(task => task.dueDate);
    }

    return tasks ?? []
  }

}
