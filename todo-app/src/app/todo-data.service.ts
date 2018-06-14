import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  // 
  lastId : number =0;
  // this filed will help me to generate incremented unique values 
  todos : Todo[] = [];
  // should hold my todos 
  // CURD /CRUD operations for type Todo

  constructor() { }
  // getAlltodos
  // will help us to get all todos action which are available.
  //function name : return type { body of the function}
  getAllTodos() : Todo[] {
    return this.todos;
  }
  // to geta specific Todo based on id.
  getTodoById(id : number) : Todo {
    //return this.todos.filter(todo => todo.id===id ).pop();
    return this.todos.find(todo => todo.id===id);
  }
  // to delete a specific id 
  deleteTodoById (id:number) : TodoDataService {
   console.log(JSON.stringify(this.todos));
    this.todos = this.todos.filter(todo => todo.id !==id);
    console.log(JSON.stringify(this.todos));
   return this;

  }
  // to delte all todos
  deleteAllTodos(): string {
    this.todos = [];
    if(this.todos.length===0)
    return "success";
    else{
      return "fail";
    }
  }

  // update 
  // 1st do we need to check whether id is existing or not based on this can we go for updation?
  // 
  updateTodoById (id : number , values : Object = {} ) : Todo {
    let todo = this.getTodoById(id);
    // based on id m i going to confirm that obj is avaliable or not?
    if(!todo)
    {
      return null;
    }
    Object.assign(todo,values);
    return todo;
  }

  // to add a new record  http post : 
  addTodo(todo : Todo) : string {
    console.log(JSON.stringify(todo));
    
    if(!todo.id)
    {
      todo.id = ++this.lastId;
      this.todos.push(todo);
      console.log(JSON.stringify(this.todos));
      return "success";
    }
    else{
      return "fail";
    }    
  }

  toggleTodoComplete(todo : Todo) : Todo
  {
    let updateTodo = this.updateTodoById(todo.id,{complete : !todo.complete});
    console.log("updated todo is "+JSON.stringify(updateTodo));
    return updateTodo;
  }
  




}
