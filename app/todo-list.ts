import {Component, Input, NgFor, FORM_DIRECTIVES } from "angular2/angular2";
import {SimpleSearch} from './SimpleSearch'
const COMPLETED = 'completed';

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <input [(ng-model)]="searchTerm"  type="text" />
      <ul>
        <li
          class="something"
          [class.completed]="todo.completed"
          *ng-for="#todo of todos | simpleSearch:searchTerm">{{todo.title|lowercase}} <button (click)="toggleTodo(todo)">toggle</button></li>
      </ul>
    </div>
  `,
  directives: [NgFor, FORM_DIRECTIVES],
  pipes: [SimpleSearch],
  styles: [`
      .${COMPLETED} {
        text-decoration: line-through;
      }
    `
  ]
})
export class TodoList {
  @Input() todos;
  searchTerm = '';
  toggleTodo(todo) {
    todo.completed = !todo.completed;
  }
}