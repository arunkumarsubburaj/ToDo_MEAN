import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit, AfterViewInit {

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
    this.todoService.getTodos("archive").subscribe((res) => {
      this.columns = res;
      console.log(res);
    });
  }

  restoreTodo(eve) {
    let currentNoteElement = (<HTMLElement>eve.target).closest('.column');
    let cardId = (<HTMLInputElement>currentNoteElement.querySelector('[name="objId"]')).value;
    let proxy = this;
    this.todoService.updateTodo({ "isArchive": false, "isDeleted": false }, cardId).subscribe((res) => {
      console.log(res);
      proxy.fetchTodoList();
    });
  }

  deleteNote(eve) {
    let currentNoteElement = (<HTMLElement>eve.target).closest('.column');
    let cardId = (<HTMLInputElement>currentNoteElement.querySelector('[name="objId"]')).value;
    let proxy = this;
    this.todoService.updateTodo({ "isArchive": false, "isDeleted": true }, cardId).subscribe((res) => {
      console.log(res);
      proxy.fetchTodoList();
    });
  }

}
