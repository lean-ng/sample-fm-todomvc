import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html',
  styleUrls: ['./todos-shell.component.css']
})
export class TodosShellComponent implements OnInit {

  todos: Todo[];

  constructor() {
    this.todos = [
      { id: 17, title: 'Component Interaction', completed: false },
      { id: 18, title: 'Template Syntax', completed: false }
    ];
  }

  // Event Handler
  destroy(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
  }

  toggle(todo: Todo): void {
    const ix  = this.todos.findIndex(t => t === todo);
    this.todos[ix] = { ...this.todos[ix], completed: !this.todos[ix].completed };
  }

  trackById(todo: Todo): number {
    return todo.id;
  }

  ngOnInit(): void {
  }

}
