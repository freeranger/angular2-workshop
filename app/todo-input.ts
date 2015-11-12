import {Component, Output, FORM_DIRECTIVES, EventEmitter} from "angular2/angular2";

@Component({
  selector: 'todo-input',
  template: `
    <div>
      <input type="text" [(ng-model)]="newTodo" />
      <button (click)="add(newTodo)">Add Todo</button>
      <p class="completed">this is some rando text</p>
    </div>
  `,
  directives: [FORM_DIRECTIVES]
})
export class TodoInput {
  @Output() added = new EventEmitter();

  newTodo = '';

  add(newTodo) {
    this.added.next({title: newTodo, completed: false});
    this.newTodo = ''
  }
}