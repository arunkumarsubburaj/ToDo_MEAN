import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private todoService: TodoService) { }
  columns: any = [];
  @ViewChild('addNote') addNote: ElementRef;
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
    this.todoService.getTodos("").subscribe((res) => {
      this.columns = res;
    });
  }
  editNote(eve) {
    let currentNoteElement = (<HTMLElement>eve.target).closest('.column');
    let cardTitle = currentNoteElement.querySelector('mat-card-title').innerHTML;
    let cardId = (<HTMLInputElement>currentNoteElement.querySelector('[name="objId"]')).value;
    let cardDesc = currentNoteElement.querySelector('mat-card-content>p').innerHTML;
    const noteElement: any = this.addNote;
    noteElement.value = cardTitle;
    noteElement.objId = cardId;
    noteElement.textAreaValue = cardDesc;
  }

  archiveNote(eve) {
    let proxy = this;
    let currentNoteElement = (<HTMLElement>eve.target).closest('.column');
    let cardId = (<HTMLInputElement>currentNoteElement.querySelector('[name="objId"]')).value;
    this.todoService.updateTodo({ "isArchive": true, "isDeleted": false }, cardId).subscribe((res) => {
      console.log(res);
      proxy.fetchTodoList();
    });
  }
  deleteNote(eve) {
    let proxy = this;
    let currentNoteElement = (<HTMLElement>eve.target).closest('.column');
    let cardId = (<HTMLInputElement>currentNoteElement.querySelector('[name="objId"]')).value;
    this.todoService.updateTodo({ "isArchive": false, "isDeleted": true }, cardId).subscribe((res) => {
      console.log(res);
      proxy.fetchTodoList();
    });
  }
}
