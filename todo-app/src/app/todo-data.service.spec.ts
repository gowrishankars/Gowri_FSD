import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe("#getAllTodos()",()=>{
    it('should return an empty array by default',inject([TodoDataService],(service:TodoDataService)=>{
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos',inject([TodoDataService],(service : TodoDataService)=>{
      let todo = new Todo({tittle : 'hello',complete : true});
      let todo2 = new Todo({tittle : 'hello2',complete : false});

      service.addTodo(todo);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo,todo2]);
    }));

  });

});
