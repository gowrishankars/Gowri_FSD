import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoDataService]

})
export class TodoComponent implements OnInit {

  private _todos : Todo[]=[];
  newTodo : Todo = new Todo();
  // have we created object or not.
  constructor(private todoDataService : TodoDataService) { 
    this.newTodo.title = 'hello from abhi';
    this._todos = todoDataService.getAllTodos();
  }

  ngOnInit() {
  }

  addTodo()
  {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();

  }

  get todos() {
    return this._todos;
  }
  set todos(value : Todo[])
  {
       console.log("from set todos");
      this._todos = value;
  }

  toggleTodoComplete(todo : Todo)
  {
    this.todoDataService.toggleTodoComplete(todo);
  }

  deleteTodoById(id: number)
  {
    this.todoDataService.deleteTodoById(id);
    this._todos = this.todoDataService.getAllTodos();
  }
}
