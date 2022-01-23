import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task';

@Pipe({
  name: 'completedStatus'
})
export class CompletedStatusPipe implements PipeTransform {

  transform(tasks: Task[], isComplete: boolean): Task[] {
    var toReturn: Task[] = [];
    tasks.forEach(task => {
      if (task.isCompleted == isComplete){
        toReturn.push(task);
      }
    });
    return toReturn;
  }

}
