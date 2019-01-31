import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css']
})
export class BinComponent implements OnInit, AfterViewInit {

  constructor(private todoService: TodoService) { }
  columns: any = [];
  ngOnInit() {
  }
  ngAfterViewInit() {
    let proxy = this;
    setTimeout(() => {
      // proxy.columns = data;
      proxy.fetchTodoList();
      console.log(proxy.columns.length);
    }, 350);
  }

  fetchTodoList() {
    this.todoService.getTodos("bin").subscribe((res) => {
      this.columns = res;
      console.log(res);
    });
  }

  restoreTodo(eve) {
    let currentNoteElement = (<HTMLElement>eve.target).closest('.column');
    let cardId = (<HTMLInputElement>currentNoteElement.querySelector('[name="objId"]')).value;
    let proxy = this;
    this.todoService.updateTodo({ "isDeleted": false, "isArchive": false }, cardId).subscribe((res) => {
      console.log(res);
      proxy.fetchTodoList();
    });
  }

  archiveNote(eve) {
    let currentNoteElement = (<HTMLElement>eve.target).closest('.column');
    let cardId = (<HTMLInputElement>currentNoteElement.querySelector('[name="objId"]')).value;
    let proxy = this;
    this.todoService.updateTodo({ "isDeleted": false, "isArchive": true }, cardId).subscribe((res) => {
      console.log(res);
      proxy.fetchTodoList();
    });
  }
}
