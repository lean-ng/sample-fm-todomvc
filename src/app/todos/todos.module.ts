import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';
import { TodosInputComponent } from './components/todos-input/todos-input.component';



@NgModule({
  declarations: [
    // Public Components - weil auch exported
    TodosShellComponent,

    // Internal Components
    TodosItemComponent,
    TodosInputComponent],
  exports: [
    // Public Component
    TodosShellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
