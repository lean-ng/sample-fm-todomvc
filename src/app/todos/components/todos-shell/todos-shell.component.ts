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

  ngOnInit(): void {
  }

}
