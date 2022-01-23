import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task';

@Pipe({
  name: 'dueStatus'
})
export class DueStatusPipe implements PipeTransform {
  private today: Date = new Date();

  transform(tasks: Task[], isDue?: boolean): Task[] {
    if ( tasks ) {
      this.today.setHours(0, 0, 0, 0);

      return tasks.filter(task => {
        task.dueDate
      });
    }

    return tasks ?? []
  }

}
