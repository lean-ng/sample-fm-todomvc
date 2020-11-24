import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.css']
})
export class TodosInputComponent {

  title = '';

  createTodo(): void {
    console.log('Create Todo:', this.title);
    this.title = '';
  }
}
