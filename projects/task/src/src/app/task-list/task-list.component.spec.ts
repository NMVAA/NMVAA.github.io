import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServiceService } from "../data-service.service";
import { TaskListComponent } from './task-list.component';
import { HttpModule } from '@angular/http';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [DataServiceService],
      declarations: [TaskListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
