import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from '../task';
import { DataServiceService } from "../data-service.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(
    private dataService: DataServiceService,
    private router: Router,
     ) { }

  ngOnInit() {
    // this.tasks = this.dataService.getTasks();
    this.dataService.getTasks().then(tasks => this.tasks = tasks);
  }

  tasks: Task[];

  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
    this.router.navigate(['/task', this.selectedTask.id]);
  }
}


