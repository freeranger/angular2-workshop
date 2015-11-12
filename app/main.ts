import {Component, bootstrap} from 'angular2/angular2';
import {TodoList} from './todo-list';
import {TodoInput} from './todo-input';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-app',
  template: `
    <h1>My Todos!!!1!</h1>
    <todo-input (added)="todoService.addTodo($event)"></todo-input>
    <todo-list [todos]="todoService.todos"></todo-list>
  `,
  directives: [TodoList, TodoInput],
  providers: [TodoService]
})
class TodoApp {
  constructor(public todoService:TodoService) {}
}

bootstrap(TodoApp);