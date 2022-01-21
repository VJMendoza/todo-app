import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TASKS_URL } from '../app.module';
import { Observable } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    protected httpClient: HttpClient,
    @Inject(TASKS_URL) protected url: string,
  ) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(
      `${this.url}`
    );
  }

  getTask(id: number): Observable<Task> {
    return this.httpClient.get<Task>(
      `${this.url}/${id}`
    );
  }
}
