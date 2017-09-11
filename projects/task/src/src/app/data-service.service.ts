import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from "./mock-tasks";
import { Headers, Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataServiceService {
  tasksUrl: any = "https://www.google.com.ua/"

  constructor(private http: Http) { }

  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }
  getTask(id: number): Promise<Task> {
    return this.getTasks()
      .then(TASKS => TASKS.find(task => task.id === id));
  }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  update(task: Task): Promise<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), { headers: this.headers })
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
