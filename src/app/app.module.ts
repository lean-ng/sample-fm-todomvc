import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { DemoDirectiveDirective } from './demo-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoDirectiveDirective
  ],
  imports: [
    BrowserModule,

    // Feature Modules
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
