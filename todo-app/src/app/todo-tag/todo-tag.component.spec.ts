import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTagComponent } from './todo-tag.component';

describe('TodoTagComponent', () => {
  let component: TodoTagComponent;
  let fixture: ComponentFixture<TodoTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
