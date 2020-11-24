import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.css']
})
export class TodosInputComponent {

  title = '';

  @Output()
  create = new EventEmitter<string>();

  createTodo(): void {
    this.create.emit(this.title);
    this.title = '';
  }
}
