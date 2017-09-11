import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from "../task";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataServiceService } from "../data-service.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getTask(+params.get('id')))
      .subscribe(task => this.selectedTask = task);
  }
  @Input() selectedTask: Task;

  show = false;
  toggle() {
    this.show = !this.show
  }

  save(): void {
    this.show = !this.show;
    this.dataService.update(this.selectedTask)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();

  }

}