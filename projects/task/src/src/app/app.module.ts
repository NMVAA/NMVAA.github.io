import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DataServiceService } from "./data-service.service";



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'tasklist',
        pathMatch: 'full'
      },
      {
        path: 'tasklist',
        component: TaskListComponent
      },
      {
        path: 'task/:id',
        component: TaskDetailComponent
      }
    ])
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],

})
export class AppModule { }
