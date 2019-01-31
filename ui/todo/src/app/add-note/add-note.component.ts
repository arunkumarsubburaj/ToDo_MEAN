import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { TodoService } from './../shared/todo.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  providers: [TodoService],
  exportAs: 'appAddNote'
})
export class AddNoteComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  @Input() value = 'clearMe';
  @Input() objId = '';
  @Input() textAreaValue = 'clearMe';
  @ViewChild('cardTitle') cardTitle: ElementRef;
  @ViewChild('cardDesc') cardDesc: ElementRef;
  @ViewChild('cardId') cardId: ElementRef;
  // @Output() addTodo = new EventEmitter();
  // @Output() updateTodo = new EventEmitter();
  // @Output() deleteTodo = new EventEmitter();
  @Output() fetchTodo = new EventEmitter();
  ngOnInit() {
    this.resetItems();
  }
  resetItems() {
    this.value = "";
    this.textAreaValue = "";
    this.objId = "";
  }
  getDetails() {
    const cardTitle = this.cardTitle.nativeElement.value;
    const cardDesc = this.cardDesc.nativeElement.value;
    const cardId = this.cardId.nativeElement.value;
    let obj: Todo = {
      title: cardTitle,
      description: cardDesc,
      hashtag: '',
      isArchive: false,
      isDeleted: false
    }
    return { "obj": obj, "objId": cardId };
  }
  addTodoItem() {
    let proxy = this;
    let data = this.getDetails();
    this.todoService.addTodo(data.obj).subscribe((res) => {
      console.log(res);
      proxy.resetItems();
      proxy.fetchTodo.emit(proxy);
    });
  }
  updateTodoItem() {
    let proxy = this;
    let data = this.getDetails();
    this.todoService.updateTodo(data.obj, data.objId).subscribe((res) => {
      console.log(res);
      proxy.resetItems();
      proxy.fetchTodo.emit(proxy);
    });
  }

}

