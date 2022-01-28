import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TASKS_URL } from '../app.module';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    protected httpClient: HttpClient,
    @Inject(TASKS_URL) protected url: string,
  ) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url)
      .pipe(
        tap((tasks: Task[]) => console.log(`Tasks retrieved: ${tasks.length}`)),
        catchError(this.handleError<Task[]>([]))
      );
  }

  getTask(id: number): Observable<Task> {
    return this.httpClient.get<Task>(
      `${this.url}/${id}`
    ).pipe(
      tap((task: Task) => console.log(`Task ${task.id} retrieved`)),
      catchError(this.handleError<Task>())
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.url, task)
      .pipe(
        tap((newTask: Task) => console.log(`New Task with id: ${newTask.id} was made`)),
        catchError(this.handleError<Task>())
      );
  }

  deleteTask(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(
      `${this.url}/${id}`
    ).pipe(
      tap(_ => console.log(`Deleted Task with id: ${id}`)),
      catchError(this.handleError<Task>())
    );
  }

  updateTask(task: Task): Observable<any> {
    return this.httpClient.put(this.url, task)
      .pipe(
        tap(_ => console.log(`Updated a task`)),
        catchError(this.handleError<any>())
      );
  }

  private handleError<T>(result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  } 
}
