import {Component, ViewEncapsulation} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TodosItemComponent  {

  // Component Member
  // - Public Properties (usually bound in the template)
  todo: Todo;

  // - Public Methods (usually event handlers)
  toggleTodo(): void {
    this.todo.completed = !this.todo.completed;
  }

  // - Constructor (usually empty, just used for DI - Dependency Injection
  constructor() {
    // Mock some component data
    this.todo = { id: 17, title: 'Template Syntax', completed: false };
  }

}
