import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  selectedTodo: Todo;
  todolist: Todo[];
  readonly baseURL = "http://localhost:3000/todo";
  constructor(private http: HttpClient) { }
  addTodo(todoObject: Todo) {
    return this.http.post(this.baseURL, todoObject);
  }
  getTodos(path) {
    if (path.length > 0) {
      return this.http.get(this.baseURL + "/" + path);
    } else {
      return this.http.get(this.baseURL);
    }
  }
  updateTodo(todoObj, todoId) {
    return this.http.put(this.baseURL + "/" + todoId, todoObj);
  }
}
