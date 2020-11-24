import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TodosItemComponent implements OnChanges, OnInit, OnDestroy {

  // Component Member
  // - Public Properties (usually bound in the template)
  @Input()
  todo: Todo;

  @Output()
  destroy = new EventEmitter<Todo>();

  @Output()
  toggle = new EventEmitter<Todo>();

  // Private Helper
  private oldTitle: string;

  // - Public Methods (usually event handlers)
  toggleTodo(): void {
    this.toggle.emit(this.todo);
  }

  // - Constructor (usually empty, just used for DI - Dependency Injection
  constructor() {
    // Mock some component data
    this.todo = { id: 17, title: 'Template Syntax', completed: false };
  }

  // Event Handler
  destroyTodo(): void {
      this.destroy.emit(this.todo);
  }

  // Called each time any input property changes (ref-changes!)
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  // Called once after construction (and initial input property changes)
  ngOnInit(): void {
    console.log('Component initializing code');
    this.oldTitle = this.todo.title;
  }

  ngOnDestroy(): void {
    console.log('Component will/is be removed from the DOM');
  }
}
