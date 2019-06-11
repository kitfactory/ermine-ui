import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBuilderExampleComponent } from './task-builder-example.component';

describe('TaskBuilderExampleComponent', () => {
  let component: TaskBuilderExampleComponent;
  let fixture: ComponentFixture<TaskBuilderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBuilderExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBuilderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
